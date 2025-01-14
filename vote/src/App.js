import './App.css';
import { useState } from "react";
import Form from './components/form/Form';

function App() {
    const [todos, setTodos] = useState([]);
    const [total, setTotal] = useState(0);
    const [allComplete, setAllComplete] = useState(0);

    const putTodo = (value) => {
        if (value) {
            setTodos([...todos, { id: Date.now(), text: value, done: false }]);
            setTotal(total + 1);
        } else {
            alert("Введите данные");
        }
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== id) return todo;

                const updatedTodo = { ...todo, done: !todo.done };


                setAllComplete(
                    todos.filter((t) => t.done).length + (updatedTodo.done ? 1 : -1)
                );

                return updatedTodo;
            })
        );
    };

    const removeTodo = (id) => {
        const todoToRemove = todos.find((todo) => todo.id === id);

        if (todoToRemove) {
            setTodos(todos.filter((todo) => todo.id !== id));
            setTotal(total - 1);

            if (todoToRemove.done) {
                setAllComplete(allComplete - 1);
            }
        }
    };

    return (
        <div className="App">
            <div className="App-header">
                <h1 className="App-title">Todolist</h1>
                <Form putTodo={putTodo} />
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li
                            className={todo.done ? "todo done" : "todo"}
                            key={todo.id}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                            <img
                                src={"../public/trash.png"}
                                alt="delete"
                                className="delete-icon"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeTodo(todo.id);
                                }}
                            />
                        </li>
                    ))}
                </ul>
                <div className="info">
                    <span>All todos: {total}</span>
                    <span>Completed: {allComplete}</span>
                </div>
            </div>
        </div>
    );
}

export default App;
