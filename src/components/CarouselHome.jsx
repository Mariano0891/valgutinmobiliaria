import { useState } from 'react'
import cover1 from '../assets/imagenesportada/interior1.jpg'
import cover2 from '../assets/imagenesportada/interiorCocina.jpg'
import cover3 from '../assets/imagenesportada/interiorComedor.jpg'
import cover4 from '../assets/imagenesportada/interiorDormitorio.jpg'
import cover5 from '../assets/imagenesportada/sierrasPortada.jpg'
import { FrontFilter } from './FrontFilter'

export const CarouselHome = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        {url: cover1},
        {url: cover2},
        {url: cover3},
        {url: cover4},
        {url: cover5},
    ]

    const imageChanger = () => {
        {/*setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0  : prevIndex + 1))*/}

        if (currentIndex === images.length - 1){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    setInterval(imageChanger, 10000)

  return (
    <div className="max-w-[1400px] h-[600px] w-full m-auto">
        <div style={{backgroundImage: `url(${images[currentIndex].url})`}} className="w-full h-full bg-center bg-cover flex items-center">
            <FrontFilter/>
        </div>
    </div>
  )
}
