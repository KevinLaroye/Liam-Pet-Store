import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const {id} = useParams();

console.log(id)

    const [itemDetail, setitemDetail] = useState(null)

    useEffect(() => {
      
        const getItemDetail = new Promise((res,rej) => {
            setTimeout(() => {
                
                fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => res(data))
              
            }, 2000);            
        })

        getItemDetail
        .then(data => setitemDetail(data))

    }, [id])

    console.log(itemDetail)

  return (

    itemDetail

    ?

    <ItemDetail 
      name= {itemDetail.name}
      description= {itemDetail.description}
      price= {itemDetail.price}
      img= {itemDetail.image}
    />

    :

    <h1>Cargando...</h1>
  )
}

export default ItemDetailContainer