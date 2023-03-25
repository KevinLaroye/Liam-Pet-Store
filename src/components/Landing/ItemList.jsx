import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Item from './Item'



const ItemList = (props) => {

  const [items, setItems] = useState(props.inventory)



  useEffect(() => {

    if (props.categoryid !== undefined) {
      const filteredItems = props.inventory.filter(item => item.category === props.categoryid)
      setItems(filteredItems)
    } else {
      setItems(props.inventory)
    }

  }, [props.categoryid, props.inventory])



  return (

    props.inventory

      ?

      <>
        {items && items.map(item =>
          <Item
            key={item.id}
            itemId={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            item={item}
          />)}
      </>

      :

      <h1>...Cargando</h1>

  )
}

export default ItemList