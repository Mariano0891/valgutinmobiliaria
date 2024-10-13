import { DetailCarousel } from "./DetailCarousel"
import city from "../assets/imgicons/city.png"
import neighborhood from "../assets/imgicons/neighborhood.png"


export const PropertyDetail = ({property}) => {
    console.log({property})
  return (
    <div className="">
        <h2 className='text-center font-extrabold text-xl text-three m-4'>{(property.title).toUpperCase()}</h2>
        <DetailCarousel images={property.images} video={property.video}/>
        <div className='bg-five w-11/12 max-w-[700px] mx-4'>
          <h3 className='p-4 font-bold'>CARACTERISTICAS</h3>
          <div className='flex flex-wrap'>
            {city &&
              <div className='flex items-center p-1 mx-2'>
                <img src={city} alt="ciudad" className='max-h-10'/>
                <p className='p-2 text-lg'>{property.city}</p>
              </div>
            }
            {neighborhood &&
              <div className='flex items-center p-1 mx-2'>
                <img src={neighborhood} alt="barrio" className='max-h-10'/>
                <p className='p-2 text-lg'>{property.neighborhood}</p>
              </div>
            }
          </div>
        </div>
    </div>
  )
}
