import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav className="nav">
                <h1>{props.title}</h1>
            </nav>
        </div>
    )
}

export default Navbar;