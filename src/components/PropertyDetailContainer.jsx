import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { Loader } from "./Loader"
import { PropertyDetail } from "./PropertyDetail"

export const PropertyDetailContainer = () => {
  
    const { id } = useParams()

    const [property, setProperty] = useState()
  
    useEffect (() => {
        getProperty ()
    }, [])


    const getProperty = () => {
        const db = getFirestore ()
        const docRef = doc(db, 'properties', id)
        getDoc( docRef ).then( snapshot => {
            setProperty( {id: snapshot.id, ...snapshot.data()})
        })
    }

    return (
    <>
        {property ? <PropertyDetail property={property}/> :
        <Loader />}
    </>
  )
}
