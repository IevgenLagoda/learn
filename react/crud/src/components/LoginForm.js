import React from 'react';

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
        <form onSubmit={onSubmit}>
            <label>Username
                <input 
                    type="text" 
                    name="email"
                    value={formData.email}
                    onChange={onChange} />
            </label>
            {errors.email && <span className="error">{errors.email}</span>}
            <label>Username
                <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={onChange} />
            </label>
            {errors.password && <span className="error">{errors.password}</span>}
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;