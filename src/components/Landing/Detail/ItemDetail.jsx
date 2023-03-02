import React from 'react'

const ItemDetail = (props) => {


    
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="itemImagen card-img-top" src={props.img} alt="..."></img>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5>{props.name}</h5>
                        <p>{props.description}</p>
                        <p>{props.price}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparen">
                    <div className="text-center"><button className="addToCart btn btn-outline-dark mt-auto" href="#">Add to cart</button></div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail