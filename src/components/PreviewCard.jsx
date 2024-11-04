import { useState, useEffect } from 'react'
import rooms from '../assets/imgicons/bedrooms.png'
import bath from '../assets/imgicons/bathroom.png'
import garage from '../assets/imgicons/garage.png'
import area from '../assets/imgicons/area.png'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export const PreviewCard = ({id, images, creditAb, dollar, price, title, neighborhood, bedrooms, bathrooms, garages, totalArea}) => {

    const cardSlides = Array.from(images)

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevCardSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardSlides.length -1 : prevIndex - 1))
    }

    const nextCardSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cardSlides.length -1 ? 0 : prevIndex + 1))
    }

    const Arrow = ({ direction , onClick }) => (
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer' 
        style={{ [direction] : "5px"}}>
            {
               direction === "left" ? (
                <IoIosArrowBack onClick={onClick} size={40}/>
               ) : (
                <IoIosArrowForward onClick={onClick} size={40}/>
               )
            }
        </div>
    )

  return (
    <div className='w-11/12 max-w-96 h-[482px] m-auto my-6 rounded-2xl overflow-hidden border-solid border-2 shadow-lg group'>
        <div style={{backgroundImage: `url(${cardSlides[currentIndex]})`}}className='h-80 bg-center bg-cover grid relative'>
            {creditAb && <p className='text-white place-self-start bg-green-700 p-2 font-semibold rounded-tl-2xl m-2'>APTA CREDITO</p>}
            <Arrow direction="left" onClick={prevCardSlide} />
            <Arrow direction="right" onClick={nextCardSlide} />
            {/*<div className='flex justify-between'>
                <img src={favEmpty} alt="" className='self-start justify-self-end m-2 max-h-10'/>
            </div>*/}
            <div className='place-self-end text-white font-extrabold text-3xl p-2 flex'>
                {price == 0 ?
                <p>CONSULTAR</p> :
                <div className='flex'>
                    {dollar ? <p>USD</p> : <p>ARS</p>}
                    <p className='pl-2'>{price}</p>
                </div>}
            </div>
        </div>
        <h3 className='text-center text-xl font-bold text-one'>{title}</h3>
        <p className='text-center text-sm text-three font-extrabold'>{neighborhood}</p>
        <div className='flex place-content-around text-three mx-2'>
            {bedrooms !=0 ?
                <div className='flex items-center p-1'>
                    <img src={rooms} alt="Dormitorios" className='max-h-10'/>
                    <p className='p-2 text-lg font-extrabold'>{bedrooms}</p>
                </div> :
                <></>
            }
            {bathrooms !=0 ?
                <div className='flex items-center p-1'>
                    <img src={bath} alt="Baños" className='max-h-10'/>
                    <p className='p-2 text-lg font-extrabold'>{bathrooms}</p>
                </div> :
                <></>
            }
            {garages != 0 ?
                <div className='flex items-center p-1'>
                    <img src={garage} alt="Garages" className='max-h-10'/>
                    <p className='p-2 text-lg font-extrabold'>{garages}</p>
                </div> :
                <></>
            }
            {totalArea != 0 ?
                <div className='flex items-center p-1'>
                    <img src={area} alt="" className='max-h-10'/>
                    <p className='p-2 text-lg font-extrabold flex'>{totalArea} <em className='font-normal'>m</em><em className='font-normal text-xs'>2</em></p>
                </div> :
                <></>
            }
        </div>
        <Link to={`/property/${id}`} className='flex justify-center my-1'>
                <button className='btn bg-one text-two font-bold w-56 hover:text-one'>MAS INFO</button>
        </Link>
    </div>
  )
}

{/* export const PreviewCard = () => {
  return (
    <div className='w-11/12 max-w-96 h-[438px] m-auto mb-6 rounded-2xl overflow-hidden border-solid border-2 shadow-lg'>
        <div style={{backgroundImage: `url(${imagenPrueba})`}}className='h-80 bg-center bg-cover grid'>
            <p className='text-white place-self-start bg-green-700 p-2 font-semibold rounded-tl-2xl m-2'>APTA CREDITO</p>
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
}*/}
