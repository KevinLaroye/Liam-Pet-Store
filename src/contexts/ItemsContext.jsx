import React, { createContext, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect } from 'react'

const ItemsContext = createContext()


const ItemsProvider = ({ children }) => {

  const [inventory, setInventory] = useState()

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, 'items')

    getDocs(itemsCollection).then((snapshot) => {
      setInventory(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))

    });

  }, [])


  return (
    <ItemsContext.Provider value={inventory}>
      {children}
    </ItemsContext.Provider>
  )

}




export { ItemsProvider }
export default ItemsContext