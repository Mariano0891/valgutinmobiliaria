import { useState, useEffect } from "react"
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { Loader } from "./Loader"
import { HomeScreenPreviews } from "./HomeScreenPreviews"

export const HomeScreenListPreview = () => {

    const [propertyList, setPropertyList] = useState([])
    const [salesList, setSalesList] = useState([])
    const [rentsList, setRentsList] = useState([])
    const [temporaryList, setTemporaryList] = useState([])

    const [availableList, setAvailableList] = useState(false)

    {/*const getPropertiesByTransaction = (transaction) => {
      const db = getFirestore()
      const collectionRefByTransaction = query(collection(db, 'properties'), where ('transaction', '==', transaction), where ('active', "==", true))
      getDocs(collectionRefByTransaction).then(snapshot => {
          setPropertyList(snapshot.docs.map(property => ({id:property.id, ...property.data()})))
          setAvailableList(true)
      })
    }*/}

    const getProperties = () => {
      const db = getFirestore()
      const collectionRefSales = query(collection(db, 'properties'), where ('transaction', '==', "venta"), where ('active', "==", true))
      getDocs( collectionRefSales ).then(snapshot => {
          setSalesList(snapshot.docs.map( property => ({id:property.id, ...property.data()})))
        })
        const collectionRefRents = query(collection(db, 'properties'), where ('transaction', '==', "alquiler"), where ('active', "==", true))
        getDocs( collectionRefRents ).then(snapshot => {
          setRentsList(snapshot.docs.map( property => ({id:property.id, ...property.data()})))
        })
        const collectionRefTemporary = query(collection(db, 'properties'), where ('transaction', '==', "temporario"), where ('active', "==", true))
        getDocs( collectionRefTemporary ).then(snapshot => {
          setTemporaryList(snapshot.docs.map( property => ({id:property.id, ...property.data()})))
          setAvailableList(true)
        })
      }

      {/*{transactions.map(transaction => setLista(transaction) (propertyList.filter(transaction => property.transaction = transaction)))}
        console.log(listaVenta)*/}
        
        useEffect(() => {    
          getProperties()
        }, [])
        
        
      
    //reverse - para invertir el orden en que se muestra el arreglo

    //sort - para hacer aleatorio el orden en que se muestra el arreglo

    //filter

  return (
    <div>
      { availableList ? 
      <div>
        {salesList.length ? <HomeScreenPreviews list={salesList}/> : ""}
        {rentsList.length ? <HomeScreenPreviews list={rentsList}/> : ""}
        {temporaryList.length ? <HomeScreenPreviews list={temporaryList}/> : ""}
      </div>
       : <Loader />}
    </div>
  )
}
