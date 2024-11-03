import React from "react";
import propTypes from "prop-types";
import PropTypes from "prop-types";

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory</p>
        <button
            className="email"
            onClick={() => props.authenticate('email')}
        >
            Log in with e-mail address
        </button>

    </nav>
);



export default Login;