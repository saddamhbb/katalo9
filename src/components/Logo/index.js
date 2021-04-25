import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Logo = () => {
    return (
        <Link className="logo" to="/">
            <img className="logo-icon" src="/img/flower.svg" title="Flower Shop Logo" alt="Flower Shop Logo" />
            Flowers
        </Link>
    )
};

export default Logo;