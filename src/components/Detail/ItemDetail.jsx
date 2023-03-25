import React from 'react'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'

const ItemDetail = ({ detail }) => {

    const { addItem } = useContext(CartContext)
    const detailItem = detail[0]

    return (
        <div className="col mb-5 d-flex justify-content-center">
            <div className="card h-100 w-50 mt-5">
                <img className="itemImagen card-img-top" src={detailItem.img} alt="..."></img>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h3>{detailItem.name}</h3>
                        <h6>{detailItem.description}</h6>
                        <p>${detailItem.price}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparen">
                    <div className="text-center"><button className="addToCart btn btn-outline-dark mt-auto" href="#" onClick={() => addItem(detailItem, 1)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail