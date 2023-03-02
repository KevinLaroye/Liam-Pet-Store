import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link to={"/"} className="navbar-brand">Liam Pet Store 🐶</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item"><Link to={"/category/electronics"} className="nav-link">Electronics</Link></li>
                    <li className="nav-item"><Link to={"/category/jewelery"} className="nav-link">Jewelry</Link></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">All Products</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                            <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                        </ul>
                    </li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar