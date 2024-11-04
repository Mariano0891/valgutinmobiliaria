import { DetailCarousel } from "./propertyDetailComponents/DetailCarousel"
import { Characteristics } from "./propertyDetailComponents/Characteristics"
import { Description } from "./propertyDetailComponents/Description"
import { PropertyIdentification } from "./propertyDetailComponents/PropertyIdentification"
import { LocationMap } from "./propertyDetailComponents/LocationMap"
import { Contact } from "./propertyDetailComponents/Contact"



export const PropertyDetail = ({property}) => {
    console.log({property})
  return (
    <div className="">
      <h2 className='text-center font-extrabold text-xl text-three m-4'>{(property.title).toUpperCase()}</h2>
      <div className="grid justify-center gap-4">
        <div className="">
          <DetailCarousel images={property.images} video={property.video}/>
        </div>
        <div className="px-2">
          <PropertyIdentification property={property}/>   
        </div>
        <div className="px-2 z-0">
          <LocationMap property={property}/>   
        </div>
        <div className="px-2">
          <Characteristics property={property} />
        </div>
        <div className="px-2">
          <Description property={property}/>         
        </div>
        <div className="px-2">
          <Contact property={property}/>         
        </div>
      </div>        
    </div>
  )
}
