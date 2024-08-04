import { useState, useEffect } from 'react'
import cover1 from '../assets/imagenesportada/interiorLiving.jpg'
import cover2 from '../assets/imagenesportada/interiorCocina.jpg'
import cover3 from '../assets/imagenesportada/interiorComedor.jpg'
import cover4 from '../assets/imagenesportada/interiorDormitorio.jpg'
import cover5 from '../assets/imagenesportada/exteriorPatio.jpg'
import cover6 from '../assets/imagenesportada/interiorLiving2.jpg'
import cover7 from '../assets/imagenesportada/interiorCocina2.jpg'
import cover8 from '../assets/imagenesportada/interiorComedor2.jpg'
import cover9 from '../assets/imagenesportada/interiorDormitorio2.jpg'
import { FrontFilter } from './FrontFilter'

export const CarouselHome = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    {/*const slides = [
        {url: "https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {url: "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {url: "https://images.unsplash.com/photo-1715358955542-83fcbd2884df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    ]*/}

    useEffect(() => {
        const slideAutoplay = setInterval(() => {
            nextSlide()
        }, 6000)
        return () => clearInterval(slideAutoplay)
    }, [currentIndex])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }

    const slides = [
        {url: cover1},
        {url: cover2},
        {url: cover3},
        {url: cover4},
        {url: cover5},
        {url: cover6},
        {url: cover7},
        {url: cover8},
        {url: cover9},
    ]

    {/*const imageChanger = () => {
        if (currentIndex === images.length - 1){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    setInterval(imageChanger, 10000)*/}

  return (
    <div className="max-w-[1400px] h-[600px] w-full m-auto group">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500 ease-in-out flex items-center">
            <FrontFilter/>
        </div>
    </div>
  )
}
