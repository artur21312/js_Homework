'use strict';
(function () {
    const todoForm = document.querySelector('[data-todo-form]');
    const todoListContainer = document.querySelector('#todoItems');

    const createTodoCard = ({title, description}) => {
        const card = document.createElement('div');
        card.className = 'col-4';
        card.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
            </div>`;
        return card;
    }

    const configureFormHandlers = (formElement) => {
        let isSubmitDisabled = true;
        const formFields = {};

        const initializeFields = () => {
            formElement.querySelectorAll('input, textarea').forEach(({name}) => {
                formFields[name] = false;
            })
        }
        initializeFields();
        console.log(formFields);

        const handleSubmit = (event) => {
            event.preventDefault();
            if (isSubmitDisabled) return;
            const inputs = event.target.querySelectorAll('input, textarea');
            const formData = Array.from(inputs).reduce((acc, {name, value}) => {
                acc[name] = value;
                return acc;
            }, {});
            const todoCardElement = createTodoCard(formData);
            todoListContainer.prepend(todoCardElement);
            event.target.reset();
        }

        const handleInput = ({target}) => {
            const submitButton = formElement.querySelector('button[type=submit]');

            if (target.value.trim().length) {
                if (!formFields[target.name]) formFields[target.name] = true;
            } else {
                if (formFields[target.name]) formFields[target.name] = false;
            }

            isSubmitDisabled = !Object.values(formFields).every((field) => field);

            if (!isSubmitDisabled) {
                submitButton.removeAttribute('disabled');
            } else {
                submitButton.setAttribute('disabled', '');
            }
        }

        return {
            handleInput,
            handleSubmit
        }
    }

    const {handleSubmit, handleInput} = configureFormHandlers(todoForm);
    todoForm.addEventListener('submit', handleSubmit);
    todoForm.addEventListener('input', handleInput);
})();
