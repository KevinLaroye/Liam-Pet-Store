import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link to={"/"} className="navbar-brand">Liam Pet Store 🐶</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorías
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to={"/category/Alimentos"} className="nav-link">Alimentos</Link>
                                <Link to={"/category/Snacks"} className="nav-link">Snacks</Link>
                                <Link to={"/category/Accesorios"} className="nav-link">Accesorios</Link>
                            </div>
                        </li>
                    </ul>
                </div>

                <Link to={"/cart"}><CartWidget /></Link>
            </div>
        </nav>
    )
}

export default Navbar