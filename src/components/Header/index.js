import React from "react";
import Logo from "../Logo";
import ShoppingCart from "../ShoppingCart";
import "./style.scss";

const Header = () => {
    return (
        <header className="py-1 header">
            <div className="container">
                <div className="d-flex px-1 justify-content-between align-items-center">
                    <Logo />
                    <ShoppingCart />
                </div>
            </div>
        </header>
    )
}

export default Header;