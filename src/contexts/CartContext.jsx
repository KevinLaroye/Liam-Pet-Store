import React, { createContext, useState } from "react";
import Swal from 'sweetalert2'

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    // Agregar un producto al carrito

    const addItem = (item, quantity) => {

        // Verificar si el producto ya fue agregado
        const existingItem = cartItems.find((i) => i.id === item.id)

        if (existingItem) {
            // Se actualiza la cantidad del producto si el producto ya está en el carrito
            const updatedItems = cartItems.map((i) => {
                if (i.id === item.id) {
                    return { ...i, quantity: i.quantity + quantity }
                } else {
                    return i
                }
            })
            setCartItems(updatedItems)
        } else {
            // Se agrega el producto al carrito en caso de que no esté
            setCartItems([...cartItems, { ...item, quantity }])
        }

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
        })

        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    }

    // Eliminar Producto

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId))
    }

    // Actualizar la cantida de un producto

    const updateQuantity = (itemId) => {
        const updatedItems = cartItems.map((item) => {
            if (item.id === itemId) {
                if (item.quantity === 1) {
                    removeItem(itemId)
                    return null
                } else {
                    return { ...item, quantity: item.quantity - 1 }
                }
            } else {
                return item
            }
        }).filter(item => item !== null)
        setCartItems(updatedItems)
    }

    // Calcular el total

    const getTotal = () => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
        return total
    }

    // Elimiar todos los productos

    const clearCart = () => {
        setCartItems([])
    }


    // Cantidad total de productos

    const getTotalQuantity = () => {
        let total = 0
        cartItems.forEach((item) => total += (item.quantity))
        return total
    }


    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addItem, removeItem, updateQuantity, getTotal, clearCart, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}


export { CartProvider }
export default CartContext