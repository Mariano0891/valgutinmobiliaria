import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { trailData } from "../assets/mockData"
import { RealEstateList } from "./RealEstateList"
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { Loader } from "./Loader"




export const ListContainer = () => {

    const [propertyList, setPropertyList] = useState([])

    const {idType} = useParams ()

    const getProperties = () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'properties')
        getDocs( collectionRef ).then(snapshot => {
            setPropertyList(snapshot.docs.map( property => ({id:property.id, ...property.data()})))
        })
    }

    const getPropertiesByType = (idType) => {
        const db = getFirestore()
        const collectionRefById = query(collection(db, 'properties'), where ('type', '==', idType))
        getDocs(collectionRefById).then(snapshot => {
            setPropertyList(snapshot.docs.map(property => ({id:property.id, ...property.data()})))
        })
    }

    useEffect(() => {
      if (idType){
        getPropertiesByType(idType)
      } else{
        getProperties()
      }
    }, [idType])
    
  return (
    <div>
        { propertyList.length ? <RealEstateList propertyList={propertyList}/> : <Loader />}
    </div>
  )
}
