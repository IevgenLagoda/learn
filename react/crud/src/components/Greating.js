import React from 'react';

function Greating(props) {
    const roles = props.roles.map((role) => 
        <li key={role}>{role}</li>
    );
    
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <ul>{roles}</ul>
        </div>
    );
}

export default Greating;