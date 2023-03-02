import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

  const {categoryid} = useParams();

  return (
    <>
    <h1 className='listContainer'>{props.greeting}</h1>
    <div id="productos" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      <ItemList
      categoryid = {categoryid}
      />
    </div>
    </>
  )
}

export default ItemListContainer