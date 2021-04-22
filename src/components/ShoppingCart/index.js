import React from "react";
import "./style.scss"

const ShoppingCart = ({ totalItem, additionalClass }) => {
    return (
        <div className={`shopping-cart ${additionalClass}`}>
            <div className="shopping-cart__counter">
                {1}
            </div>
            <div className="shopping-cart__icon-container">
                <img className="shopping-cart__icon" src="/img/shopping-cart.svg" />
            </div>
        </div>
    )
}

export default ShoppingCart;