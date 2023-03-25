import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemsContext from '../../contexts/ItemsContext'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const inventory = useContext(ItemsContext)
  const { id } = useParams();
  const [itemDetail, setitemDetail] = useState(null)
  const [isIdInInventory, setIsIdInInventory] = useState()



  useEffect(() => {

    if (inventory) {

      const inventoryIds = inventory.map((item) => item.id)
      setIsIdInInventory(inventoryIds.includes(id))

      if (isIdInInventory) {
        const detailedItem = inventory.filter(item => item.id === id)
        setitemDetail(detailedItem)
      }
    }
  }, [id, inventory, isIdInInventory])


  return (

    <>
      {isIdInInventory ? (itemDetail ? (<ItemDetail detail={itemDetail} />) : <h1>...Cargando</h1>) : (<h1>El Item solicitado no existe</h1>)}
    </>

  )
}

export default ItemDetailContainer