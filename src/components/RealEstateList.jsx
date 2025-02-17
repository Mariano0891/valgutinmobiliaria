import { PreviewCard } from "./PreviewCard"
import { useParams } from "react-router-dom"


export const RealEstateList = ({propertyList}) => {

  const {idTransaction, idType} = useParams ()

  let title = ""
  
  if(idType == undefined & idTransaction == "temporario"){
    title = `propiedades en alquiler temporario`
  } else if(idType == undefined){
    title = `propiedades en ${idTransaction}`
  } else if(idType == "local" || idType == "galpon"){
    title = `${idType}es en ${idTransaction}`
  } else if(idType == "inversion"){
    title = `Oportunidades de ${idType}`
  } else if(idTransaction == "temporario"){
    title = `${idType}s en alquiler temporario`
  } else{
    title = `${idType}s en ${idTransaction}`
  }
  
  return (
    <div className=''>
      <div className='block text-center m-4 uppercase font-bold text-two'>
        <h4 className='text-2xl'>{title}</h4>
      </div>
      {propertyList.length ? 
        <div className="flex flex-wrap">
          {propertyList.map(item=> <PreviewCard key={item.id} {...item} />)}
        </div> : 
        <div className='block text-center my-32 uppercase text-one'>
          <h4 className='text-3xl p-4 font-extrabold'>Lo sentimos</h4> 
          <h4 className='text-2xl p-2 font-bold'>En este momento no disponemos de unidades que respondan al criterio solicitado</h4>
        </div>
        }
    </div>
  )
}
