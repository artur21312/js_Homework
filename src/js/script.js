'use strict';

const form = document.getElementById('search-form');
const errorMessage = document.getElementById('error-message');
const postContainer = document.getElementById('post-container');
const commentsContainer = document.getElementById('comments-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const postId = document.getElementById('post-id').value;

    errorMessage.textContent = '';
    postContainer.innerHTML = '';
    commentsContainer.innerHTML = '';


    if (postId < 1 || postId > 100) {
        errorMessage.textContent = 'ID має бути в межах від 1 до 100.';
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пост не знайдено');
            }
            return response.json();
        })
        .then(post => {
            displayPost(post);
        })
        .catch(error => {
            errorMessage.textContent = error.message;
        });
});

function displayPost(post) {
    postContainer.innerHTML = `
        <h2>Пост №${post.id}</h2>
        <p><strong>Заголовок:</strong> ${post.title}</p>
        <p>${post.body}</p>
        <button id="load-comments">Показати коментарі</button>
    `;

    const loadCommentsButton = document.getElementById('load-comments');
    loadCommentsButton.addEventListener('click', () => loadComments(post.id));
}

function loadComments(postId) {
    commentsContainer.innerHTML = '<p>Завантаження коментарів...</p>';

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Не вдалося завантажити коментарі');
            }
            return response.json();
        })
        .then(comments => {
            displayComments(comments);
        })
        .catch(error => {
            commentsContainer.innerHTML = `<p class="error">${error.message}</p>`;
        });
}

function displayComments(comments) {
    if (comments.length === 0) {
        commentsContainer.innerHTML = '<p>Коментарі відсутні.</p>';
        return;
    }

    const commentsHtml = comments.map(comment => `
        <div>
            <h4>${comment.name} (${comment.email})</h4>
            <p>${comment.body}</p>
        </div>
    `).join('');

    commentsContainer.innerHTML = `
        <h3>Коментарі:</h3>
        ${commentsHtml}
    `;
}
