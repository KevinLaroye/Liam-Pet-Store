import React from 'react'

const CartWidget = () => {
    return (
        <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#shoppingCartDiv" aria-expanded="false" aria-controls="shoppingCartDiv">
            <i className="bi-cart-fill me-1">🛒</i>
            <span className="badge bg-dark text-white ms-1 rounded-pill">2</span>
        </button>
    )
}

export default CartWidget