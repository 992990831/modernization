import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <div>
        <Link to="/" className="App-link">Home</Link>
        <Link to="/about" className="App-link">About</Link>
        <Link to="/contact" className="App-link">Contact</Link>
    </div>
);

export default Header;

