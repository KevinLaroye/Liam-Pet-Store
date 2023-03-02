import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = (props) => {



    return (
        <div className="col mb-5">
            
                <div className="card h-100">
                <Link to={`/product/${props.id}`}><img className="itemImagen card-img-top" src={props.img} alt="..."></img></Link>
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5>{props.name}</h5>
                            <p>{props.price}</p>
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparen">
                        <ItemCount />
                        <div className="text-center"><button className="addToCart btn btn-outline-dark mt-auto" href="#">Add to cart</button></div>
                    </div>
                </div>
            
        </div>
    )
}

export default Item