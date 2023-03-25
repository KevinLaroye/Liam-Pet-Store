import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ItemsContext from '../../contexts/ItemsContext'

const ItemListContainer = (props) => {

  const { categoryid } = useParams();
  const inventory = useContext(ItemsContext)

  return (
    <>
      <h1 className='listContainer'>{props.greeting}</h1>
      <div id="productos" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center p-4">
        <ItemList
          categoryid={categoryid}
          inventory={inventory}
        />
      </div>
    </>
  )
}

export default ItemListContainer