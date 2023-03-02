import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Item from './Item'

const ItemList = (props) => {

  const [items, setItems] = useState([])

  useEffect(() => {

    if (props.categoryid === undefined) {
      
      const getItems = new Promise(((res, rej) => {
        setTimeout(() => {

          fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => res(data))
            .catch(error => rej(error))
        }, 2000);
      }))

      getItems
        .then(data => setItems(data))
        .catch(error => console.log(error))

    } else {

      fetch(`https://fakestoreapi.com/products/category/${props.categoryid}`)
        .then(res => res.json())
        .then(data => setItems(data))

    }


  }, [props.categoryid])


  console.log(items)

  return (
    <>
      {items.map(item =>
        <Item
          id={item.id}
          name={item.title}
          price={item.price}
          img={item.image}
        />)}
    </>
  )
}

export default ItemList