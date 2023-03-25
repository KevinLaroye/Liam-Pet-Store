import React from 'react'
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const ItemCount = () => {

    const [count, setCount] = useState(0)

    function add() {
        setCount(
            count + 1
        )
    }

    function reduce() {
        setCount(
            count - 1
        )
    }

    return (
        <div className="input-group mb-3 mt-3 justify-content-center">
            <div className="input-group-prepend border border-dark">
                <button onClick={reduce} className="btn" type="button">
                    <FaMinus />
                </button>
                {count}
                <button onClick={add} className="btn" type="button">
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default ItemCount