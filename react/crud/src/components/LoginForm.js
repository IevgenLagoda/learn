import React from 'react';
import '../App.css';

function LoginForm({onLogingStatusChange}) {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({});

    function onChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData, 
            [name]: value
        });

        if (errors[name]) {
            // Clear error for this field
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        if (Object.keys(newErrors).length === 0) {
            onLogingStatusChange(true);
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <div className="login-container">
            <form className="login-form modern-card" onSubmit={onSubmit}>
                <h2 className="login-title">Welcome Back</h2>
                <p className="login-description">Sign in to continue</p>
                <label className="form-field">
                    Email
                    <input 
                        className="text-input"
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={onChange} />
                </label>
                {errors.email && <span className="error">{errors.email}</span>}
                <label className="form-field">
                    Password
                    <input 
                        className="text-input"
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={onChange} />
                </label>
                {errors.password && <span className="error">{errors.password}</span>}
                <button className="submit-button primary-button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;