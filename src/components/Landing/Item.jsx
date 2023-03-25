import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../contexts/CartContext'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"


const Item = (props) => {

    const { addItem, removeItem } = useContext(CartContext)

    return (
        <div className="col mb-5">

            <div className="card h-100">
                <Link to={`/product/${props.itemId}`}><img className="itemImagen card-img-top" src={props.img} alt="..."></img></Link>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5>{props.name}</h5>
                        <p>${props.price}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparen">
                    <div className="text-center">
                        <button className="addToCart btn btn-outline-dark mt-auto" href="#" onClick={() => addItem(props.item, 1)}>Add to cart</button>
                        <button className="removeCart btn btn-outline-danger mt-auto mx-3" href="#" onClick={() => removeItem(props.itemId)}>Remove</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Item