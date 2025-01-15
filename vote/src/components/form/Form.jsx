import './Form.css';
import { useState } from "react";

const Form = (props) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            setError(true);
            return;
        }
        props.putTodo(value.trim());
        setValue("");
        setError(false);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Введите текст"
                className={`input ${error ? "input-error" : ""}`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="button">
                Добавить
            </button>
            {error && <p className="error-message">Поле не мае бути пустим!</p>}
        </form>
    );
};

export default Form;
