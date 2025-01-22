import React, { useState, useEffect } from 'react';
import './App.css';

const ContactsApp = () => {
    const [contacts, setContacts] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newContact, setNewContact] = useState({ name: '', username: '', phone: '' });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setContacts(data.map(({ id, name, username, phone }) => ({ id, name, username, phone })));
            })
            .catch((error) => console.error('Error fetching contacts:', error));
    }, []);

    const handleDelete = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSave = () => {
        const id = Date.now();
        setContacts([...contacts, { id, ...newContact }]);
        setNewContact({ name: '', username: '', phone: '' });
        setIsFormVisible(false);
    };

    const handleCancel = () => {
        setNewContact({ name: '', username: '', phone: '' });
        setIsFormVisible(false);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Contacts</h1>
            <table className="contacts-table">
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button className="delete-button" onClick={() => handleDelete(contact.id)}>
                                Видалити
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {!isFormVisible && (
                <button className="add-button" onClick={() => setIsFormVisible(true)}>
                    Додати контакт
                </button>
            )}

            {isFormVisible && (
                <div className="form-container">
                    <h2 className="form-title">Додати новий контакт</h2>
                    <form onSubmit={(e) => e.preventDefault()} className="contact-form">
                        <div className="form-group">
                            <label>Ім'я:</label>
                            <input
                                type="text"
                                name="name"
                                value={newContact.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Прізвище:</label>
                            <input
                                type="text"
                                name="username"
                                value={newContact.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Телефон:</label>
                            <input
                                type="text"
                                name="phone"
                                value={newContact.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-actions">
                            <button className="save-button" type="button" onClick={handleSave}>
                                Зберегти
                            </button>
                            <button className="cancel-button" type="button" onClick={handleCancel}>
                                Скасувати
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ContactsApp;
