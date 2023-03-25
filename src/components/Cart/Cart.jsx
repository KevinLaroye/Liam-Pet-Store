import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import "./Cart.css";
import CartForm from "./CartForm";

const Cart = () => {
    const { cartItems, addItem, updateQuantity, getTotalQuantity } =
        useContext(CartContext);

    return (
        <div className="cardCart">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col">
                                <h4>
                                    <b>Carrito de Compras</b>
                                </h4>
                            </div>
                            <div className="col align-self-center text-right text-muted">
                                {getTotalQuantity() === 0
                                    ? "No hay productos en el carrito"
                                    : ""}
                            </div>
                        </div>
                    </div>

                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            id={item.id}
                            className="row border-top border-bottom"
                        >
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    <img className="img-fluid" src={item.img} alt="" />
                                </div>
                                <div className="col">
                                    <div className="row text-muted">{item.name}</div>
                                </div>
                                <div className="col text-center">
                                    <h6>Cantidad</h6>
                                    <div className="d-block mx-auto">{item.quantity}</div>
                                </div>
                                <div className="col text-center">
                                    <h6>Precio</h6>
                                    <div className="d-block mx-auto">$ {item.price * item.quantity}</div>
                                </div>
                                <div className="col">
                                    <button
                                        className="removeCart btn btn-outline-danger mx-1"
                                        href="#"
                                        onClick={() => updateQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <button
                                        className="addToCart btn btn-outline-dark mx-1"
                                        href="#"
                                        onClick={() => addItem(item, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="back-to-shop">
                        <Link to="/">
                            <span className="text-muted">...De vuelta a la tienda</span>
                        </Link>
                    </div>
                </div>
                <CartForm />
            </div>
        </div>
    );
};

export default Cart;
