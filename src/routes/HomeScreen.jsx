import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { CarouselHome } from '../components/CarouselHome'
import { HomeScreenListPreview } from '../components/HomeScreenListPreview'
import { ListContainer } from '../components/ListContainer'
import { PreviewCard } from '../components/PreviewCard'
import { FrontFilter } from '../components/FrontFilter'

export const Home = () => {

  const [propertyList, setPropertyList] = useState([])
  const [availableList, setAvailableList] = useState(false)

  const getProperties = () => {
    const db = getFirestore()
    const collectionRef = query(collection(db, 'properties'), where ('active', "==", true))
    getDocs( collectionRef ).then(snapshot => {
      setPropertyList(snapshot.docs.map( property => ({id:property.id, ...property.data()})))
      setAvailableList(true)
    })
  }

  useEffect(() => {    
    getProperties()
  }, [])

  return (
    <div className=''>
       <div className='max-w-[1400px] h-[600px] w-full m-auto relative'>
          <CarouselHome/>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
            {propertyList.length ? <FrontFilter propertyList={propertyList}/> : ""}
          </div>
       </div>
       <h2 className='text-center my-2 text-2xl md:text-3xl text-one font-bold'>INMUEBLES DESTACADOS</h2>
       {/*<ListContainer></ListContainer>*/}
       <HomeScreenListPreview/>
    </div>
  )
}
