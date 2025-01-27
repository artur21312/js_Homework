import './App.css';
import React, { useState } from "react";

export default function FormValidation() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Ім'я є обов'язковим для заповнення.";
        }

        if (!formData.email) {
            newErrors.email = "Електронна пошта є обов'язковою для заповнення.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Невірний формат електронної пошти.";
        }

        if (!formData.phone) {
            newErrors.phone = "Телефон є обов'язковим для заповнення.";
        } else if (!/^\d{12}$/.test(formData.phone)) {
            newErrors.phone = "Телефон повинен містити тільки 12 цифр.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Форма успішно надіслана!");
            setFormData({ name: "", email: "", phone: "" });
            setErrors({});
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4 border rounded-xl shadow">
            <div>
                <label htmlFor="name" className="block mb-1 font-medium">Ім'я</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block mb-1 font-medium">Електронна пошта</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="phone" className="block mb-1 font-medium">Телефон</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Надіслати
            </button>
        </form>
    );
}
