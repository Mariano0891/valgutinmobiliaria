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
      <h2 className='text-center font-extrabold text-xl text-three m-4'>{(property.title).toUpperCase()} EN {(property.transaction).toUpperCase()}</h2>
      <div className="grid justify-center gap-4 my-4 lg:hidden">
        <div className="">
          <DetailCarousel images={property.images} video={property.video}/>
        </div>
        <div className="px-2 md:px-0">
          <PropertyIdentification property={property}/>   
        </div>
        <div className="px-2 md:px-0 -z-10">
          <LocationMap property={property}/>   
        </div>
        <div className="px-2 md:px-0">
          <Characteristics property={property} />
        </div>
        <div className="px-2 md:px-0">
          <Description property={property}/>         
        </div>
        <div className="px-2 md:px-0">
          <Contact property={property}/>         
        </div>
      </div>        
      <div className="hidden lg:grid grid-cols-5 justify-center gap-4 my-4">
        <div className="col-span-3 grid justify-center gap-4 mx-4">
          <div className="">
            <DetailCarousel images={property.images} video={property.video}/>
          </div>
          <div className="">
            <Characteristics property={property} />
          </div>
          <div className="">
            <Description property={property}/>         
          </div>
        </div>
        <div className="grid col-span-2 justify-center gap-4 content-start mt-[30px] mx-2">
          <div className="">
            <PropertyIdentification property={property}/>   
          </div>
          <div className="z-0">
            <LocationMap property={property}/>   
          </div>
          <div className="">
            <Contact property={property}/>         
          </div>
        </div>
      </div>        
    </div>
  )
}
