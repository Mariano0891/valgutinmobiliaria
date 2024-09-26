import { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { SlPicture } from 'react-icons/sl'
import { RxVideo } from 'react-icons/rx'
import YoutubePlayer from 'react-player/youtube'
import YouTubePlayer from 'react-player/youtube'


export const DetailCarousel = ({images, video}) => {
   
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevDetailSlide = () => {
        setCurrentIndex ((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const nextDetailSlide = () => {
        setCurrentIndex ((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const Arrow = ({ direction , onClick }) => (
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer backdrop-blur-xl' style={{ [direction] : "5px"}}>
            {direction === 'left' ? (
                <IoIosArrowBack onClick={onClick}  size={40}/>
            ) : (
                <IoIosArrowForward onClick={onClick} size={40}/>
            )}
        </div>
    )
    
    const goToSlide = (imageIndex) => {
        setCurrentIndex(imageIndex)
    }

    const [gallery, setGallery] = useState("photo")
    
    const showGallery = (gallery) => {
        setGallery(gallery)
    }

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    const goToVideo = (videoIndex) => {
        setCurrentVideoIndex(videoIndex)
    }

  return (
    <div className='w-11/12 max-w-[700px] overflow-hidden my-1 mx-4'>
        {/*Gallery selection Tab*/}
        <div className='bg-four border-four border-2 h-[30px] w-2/6 flex border-b-0'>
            <div onClick={() => showGallery("photo")} data-gallery={gallery==="photo"} className='w-1/2 h-full flex justify-evenly items-center data-[gallery="false"]:bg-white data-[gallery="false"]:cursor-pointer'>
                <SlPicture className='text-2xl'/>
                <p>Fotos</p>
            </div>
            <div onClick={() => showGallery("video")} data-gallery={gallery==="video"} className='w-1/2 h-full bg-white flex justify-evenly items-center cursor-pointer data-[gallery="true"]:bg-four data-[gallery="true"]:cursor-default'>
                <RxVideo className='text-2xl'/>
                <p>Videos</p>
            </div>
        </div>
        {/*Photo gallery*/}
        <div data-gallery={gallery==="photo"} className='w-full p-2 bg-four data-[gallery="false"]:hidden'>
            <div style={{backgroundImage: `url(${images[currentIndex]})`}} className="w-full h-[400px] bg-center bg-cover duration-500 group relative">
                <Arrow direction="left" onClick={prevDetailSlide} />
                <Arrow direction="right" onClick={nextDetailSlide} />
            </div>
            <div className='w-full h-[50px] overflow-hidden flex justify-center mt-2'>
                {images.map((image, imageIndex) => (
                    <div key={imageIndex} onClick={() => goToSlide(imageIndex)} style={{backgroundImage: `url(${images[imageIndex]})`}} data-index={imageIndex===currentIndex} className='h-[50px] w-[10%] mx-1 bg-center bg-cover brightness-50 cursor-pointer data-[index="true"]:brightness-100'></div>
                ))}
            </div>        
        </div>
        {/*Video gallery*/}
        <div data-gallery={gallery==="video"} className='w-full p-2 bg-four hidden data-[gallery="true"]:block'>
            <YoutubePlayer url={video[currentVideoIndex]} controls height={400} style={{margin: "auto",}}/>
            <div className='w-full h-[50px] overflow-hidden flex justify-center mt-2'>
                {video.map((video, videoIndex) => (
                    <div data-index={videoIndex===currentVideoIndex} className='h-[50px] mx-1 brightness-50 cursor-pointer data-[index="true"]:brightness-100 data-[index="true"]:cursor-default' >
                        <div className='h-[50px] w-[70px] bg-transparent absolute top-0 left-0' onClick={() => goToVideo(videoIndex) }></div>
                        <YoutubePlayer key={videoIndex} url={video} height={50} width={70} light playIcon={"false"} />
                    </div>
                ))}
            </div>        
        </div>
    </div>
  )
}
