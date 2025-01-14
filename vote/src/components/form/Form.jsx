import './Form.css';
import { useState } from "react";

const Form = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.putTodo(value); // Используем props
        setValue(""); // Сбрасываем значение
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Введите текст"
                className="input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    );
};

export default Form;
