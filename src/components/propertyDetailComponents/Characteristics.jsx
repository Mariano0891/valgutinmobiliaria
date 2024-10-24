import city from "../../assets/imgicons/city.png"
import neighborhood from "../../assets/imgicons/neighborhood.png"
import address from "../../assets/imgicons/address.png"
import transaction from "../../assets/imgicons/transaction.png"
import bedrooms from "../../assets/imgicons/bedrooms.png"
import bathroom from "../../assets/imgicons/bathroom.png"
import garages from "../../assets/imgicons/garage.png"
import area from "../../assets/imgicons/area.png"
import usableArea from "../../assets/imgicons/usableArea.png"

export const Characteristics = ({property}) => {
  return (
    <div className='bg-five w-full max-w-[700px]'>
        <h3 className='p-4 font-bold'>CARACTERISTICAS</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 justify-evenly'>
            {property.city ?
              <div className='flex items-center p-1 mx-1'>
                <img src={city} alt="ciudad" className='max-h-8'/>
                <p className='p-2'>{property.city}</p>
              </div> : <></>
            }
            {property.neighborhood ?
              <div className='flex items-center p-1 mx-1'>
                <img src={neighborhood} alt="barrio" className='max-h-8'/>
                <p className='p-2'>{property.neighborhood}</p>
              </div> : <></>
            }
            {property.address ?
              <div className='flex items-center p-1 mx-1'>
                <img src={address} alt="direccion" className='max-h-8'/>
                <p className='p-2'>{property.address}</p>
              </div> : <></>
            }
            {property.transaction ?
              <div className='flex items-center p-1 mx-1'>
                <img src={transaction} alt="tipo de operacion" className='max-h-8'/>
                <p className='p-2 '>{property.transaction}</p>
              </div> : <></>
            }
            {property.bedrooms ?
              <div className='flex items-center p-1 mx-1'>
                <img src={bedrooms} alt="dormitorios" className='max-h-8'/>
                <p className='p-2 '>{property.bedrooms} dormitorios</p>
              </div> : <></>
            }
            {property.bathrooms ?
              <div className='flex items-center p-1 mx-1'>
                <img src={bathroom} alt="dormitorios" className='max-h-8'/>
                <p className='p-2 '>{property.bathrooms} baños</p>
              </div> : <></>
            }
            {property.garages ?
              <div className='flex items-center p-1 mx-1'>
                <img src={garages} alt="garages" className='max-h-8'/>
                <p className='p-2 '>{property.garages} vehiculos</p>
              </div> : <></>
            }
            {property.totalArea ?
              <div className='flex items-center p-1 mx-1'>
                <img src={area} alt="dormitorios" className='max-h-8'/>
                <p className='p-2 '>{property.totalArea} <em className='font-normal'>m</em><em className='font-normal text-xs'>2</em></p>
              </div> : <></>
            }
            {property.usableArea ?
              <div className='flex items-center p-1 mx-1'>
                <img src={usableArea} alt="dormitorios" className='max-h-8'/>
                <p className='p-2 '>{property.usableArea} <em className='font-normal'>m</em><em className='font-normal text-xs'>2</em></p>
              </div> : <></>
            }

        </div>
    </div>
  )
}
