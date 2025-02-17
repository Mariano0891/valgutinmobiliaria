import { useState, useEffect } from 'react'

export const CarouselHome = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

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
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FinteriorComedor.jpg?alt=media&token=b1031521-6fa4-4a9a-922c-666e8b280e7a"},
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FinteriorCocina.jpg?alt=media&token=a34498d8-72ed-44da-97a3-a5f671dc89b2"},
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FinteriorDormitorio.jpg?alt=media&token=0f711ccf-65b9-4d88-90e3-96b9f00b2cb8"},
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FinteriorLiving.jpg?alt=media&token=19bc1128-c202-4e5c-84a9-7bce4b78217a"},
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FexteriorPatio.jpg?alt=media&token=d648acac-59d2-464f-ae30-c88e3d4438f7"},
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FinteriorCocina2.jpg?alt=media&token=f2f1b281-c2c1-4c88-a968-2363915f154f"},
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FinteriorComedor2.jpg?alt=media&token=f603f2e0-6bd9-4ed0-a914-ed7eb98d9b85"},
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FinteriorDormitorio2.jpg?alt=media&token=22c86460-b026-41d5-9dfa-f2440653bb9a"},
        {url: "https://firebasestorage.googleapis.com/v0/b/valgut-propiedades.appspot.com/o/CarouselHome%2FinteriorLiving2.jpg?alt=media&token=16dd2364-2f8e-4d1b-81b7-47c7d9c3014b"},
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
    <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500 ease-in-out flex items-center">
    </div>
  )
}
