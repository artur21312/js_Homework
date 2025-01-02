import React from 'react';
import './Navigacion.css';

export  const Navigacion = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><a href="#home">Головна</a></li>
                    <li><a href="#about">Про нас</a></li>
                    <li><a href="#contact">Контакти</a></li>
                </ul>
            </nav>
        </aside>
    );
};
