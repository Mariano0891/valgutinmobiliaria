import { DetailCarousel } from "./DetailCarousel"


export const PropertyDetail = ({property}) => {
    console.log({property})
  return (
    <div className="">
        <h2 className='text-center font-extrabold text-xl text-three m-4'>{(property.title).toUpperCase()}</h2>
        <DetailCarousel images={property.images} video={property.video}/>
        
    </div>
  )
}
