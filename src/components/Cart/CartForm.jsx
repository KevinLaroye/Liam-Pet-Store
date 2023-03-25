import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import Swal from 'sweetalert2'

const CartForm = () => {

    const { cartItems, getTotal, clearCart } = useContext(CartContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const db = getFirestore()

    const ordersCollection = collection(db, 'orders')

    const handleSubmit = (e) => {

        e.preventDefault()

        const cartItemsNoStock = cartItems.map(({ stock, img, ...properties }) => properties)

        const order = {
            buyer: {
                name: name,
                email: email,
                address: address
            },
            items: cartItemsNoStock,
            date: new Date().toLocaleDateString(),
            total: getTotal()
        }

        addDoc(ordersCollection, order)
            .then((docRef) => {

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tu compra se proceso con exito.',
                    html: `Gracias por tu compra ${name}! Te enviaremos un correo a ${email} con tus datos de compra.
                <br><br>
                El ID de tu transaccion es ${docRef.id}.`,
                    showConfirmButton: false
                })


                clearCart()
                setName('')
                setEmail('')
                setAddress('')
            })
            .catch((e) => { console.log("Error al agregar el documento", e) })
    }

    return (
        <div className="col-md-4 summary">
            <div><h5><b>Resumen de Compra</b></h5></div>
            <hr />
            <div className="row">
                <div className="col" style={{ paddingLeft: 0 }}>PRECIO TOTAL</div>
                <div className="col text-right">$ {getTotal()}</div>
            </div>
            <hr />
            <form onSubmit={handleSubmit}>
                <p>Nombre</p>
                <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                <p>Correo</p>
                <input placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <p>Dirección</p>
                <input placeholder="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <button className="btnCart" type="submit">COMPRAR</button>
            </form>

        </div>
    )
}

export default CartForm