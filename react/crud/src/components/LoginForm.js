import React from 'react';

function LoginForm({onLogingStatusChange}) {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    function onChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData, 
            [name]: value
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        onLogingStatusChange(true);
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
            <label>Username
                <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={onChange} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;