import imagenPrueba from '../assets/imgproducts/house1/fifteen.jpeg'
import rooms from '../assets/imgicons/bedrooms.png'
import bathrooms from '../assets/imgicons/bathroom.png'
import garage from '../assets/imgicons/garage.png'
import area from '../assets/imgicons/area.png'

export const PreviewCard = () => {
  return (
    <div className='w-11/12 max-w-96 h-[438px] m-auto mb-6 rounded-2xl overflow-hidden border-solid border-2 shadow-lg'>
        <div style={{backgroundImage: `url(${imagenPrueba})`}}className='h-80 bg-center bg-cover grid'>
            {/*<img src={imagenPrueba} alt="Imagen de presentacion" className='h-80 object-cover'/>*/}
            <p className='text-white place-self-start bg-green-700 p-2 font-semibold rounded-tl-2xl m-2'>APTA CREDITO</p>
            {/*<div className='flex justify-between'>
                <img src={favEmpty} alt="" className='self-start justify-self-end m-2 max-h-10'/>
            </div>*/}
            <p className='place-self-end text-white font-extrabold text-3xl p-2'>USD 88.000</p>
        </div>
        <h3 className='text-center text-xl font-bold text-one'>CASA DE 3 DORMITORIOS</h3>
        <p className='text-center text-sm text-two font-extrabold'>Quintas de Arguello - Cordoba</p>
        <div className='flex place-content-around text-two mx-2'>
            <div className='flex items-center'>
                <img src={rooms} alt="Dormitorios" className='max-h-10'/>
                <p className='p-3 text-lg font-extrabold'>3</p>
            </div>
            <div className='flex items-center'>
                <img src={bathrooms} alt="" className='max-h-10'/>
                <p className='p-3 text-lg font-extrabold'>2</p>
            </div>
            <div className='flex items-center'>
                <img src={garage} alt="" className='max-h-10'/>
                <p className='p-3 text-lg font-extrabold'>1</p>
            </div>
            <div className='flex items-center'>
                <img src={area} alt="" className='max-h-10'/>
                <p className='p-3 text-lg font-extrabold flex'>60 m<p className='text-sm'>2</p></p>
            </div>
        </div>
    </div>
  )
}
