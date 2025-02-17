import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { RealEstateList } from "./RealEstateList"
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { Loader } from "./Loader"




export const ListContainer = () => {

    const [propertyList, setPropertyList] = useState([])

    const [availableList, setAvailableList] = useState(false)

    const {idTransaction, idType} = useParams ()

    const getProperties = () => {
        const db = getFirestore()
        const collectionRef = query(collection(db, 'properties'), where ('active', "==", true))
        getDocs( collectionRef ).then(snapshot => {
            setPropertyList(snapshot.docs.map( property => ({id:property.id, ...property.data()})))
            setAvailableList(true)
        })
    }

    const getPropertiesByTransaction = (idTransaction) => {
        const db = getFirestore()
        const collectionRefByTransaction = query(collection(db, 'properties'), where ('transaction', '==', idTransaction), where ('active', "==", true))
        getDocs(collectionRefByTransaction).then(snapshot => {
            setPropertyList(snapshot.docs.map(property => ({id:property.id, ...property.data()})))
            setAvailableList(true)
        })
    }

    const getPropertiesByTransactionType = (idTransaction, idType) => {
        const db = getFirestore()
        const collectionRefByTransactionType = query(collection(db, 'properties'), where ('transaction', '==', idTransaction), where ('type', '==', idType), where ('active', "==", true))
        getDocs(collectionRefByTransactionType).then(snapshot => {
            setPropertyList(snapshot.docs.map(property => ({id:property.id, ...property.data()})))
            setAvailableList(true)
        })
    }

    useEffect(() => {
      if(idType) {
        getPropertiesByTransactionType(idTransaction, idType)
      } else if (idTransaction){
        getPropertiesByTransaction(idTransaction)
      } else {
        getProperties()
      }
    }, [idTransaction])
    
  return (
    <div>
        { availableList ? <RealEstateList propertyList={propertyList}/> : <Loader />}
    </div>
  )
}
