import { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { SlPicture } from 'react-icons/sl'
import { RxVideo } from 'react-icons/rx'
import YoutubePlayer from 'react-player/youtube'



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
                <IoIosArrowBack onClick={onClick}  size={40} color='#252525'/>
            ) : (
                <IoIosArrowForward onClick={onClick} size={40} color='#252525'/>
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
    <div className='w-screen max-w-[700px] overflow-hidden px-2 md:px-0'>
        {/*Gallery selection Tab*/}
        <div data-video={video.length > 0} className='bg-five border-five border-2 h-[30px] w-3/6 md:w-2/6 flex border-b-0 data-[video="false"]:w-1/5'>
            <div onClick={() => showGallery("photo")} data-gallery={gallery==="photo"} data-video={video.length > 0} className='w-1/2 data-[video="false"]:w-full h-full flex justify-evenly items-center data-[gallery="false"]:bg-white data-[gallery="false"]:cursor-pointer'>
                <SlPicture className='text-xl'/>
                <p className='text-xs'>Fotos</p>
            </div>
            {video.length > 0 &&
                <div onClick={() => showGallery("video")} data-gallery={gallery==="video"} className='w-1/2 h-full bg-white flex justify-evenly items-center cursor-pointer data-[gallery="true"]:bg-five data-[gallery="true"]:cursor-default'>
                <RxVideo className='text-xl'/>
                <p className='text-xs'>Videos</p>
                </div>
            }
        </div>
        {/*Photo gallery*/}
        <div data-gallery={gallery==="photo"} className='w-full p-2 bg-five data-[gallery="false"]:hidden'>
            <div style={{backgroundImage: `url(${images[currentIndex]})`}} className="w-full h-[400px] bg-center bg-contain bg-no-repeat duration-500 group relative">
                <Arrow direction="left" onClick={prevDetailSlide} />
                <Arrow direction="right" onClick={nextDetailSlide} />
            </div>
            <div className='w-full h-[50px] overflow-hidden flex mt-2'>
                {images.map((image, imageIndex) => (
                    <div key={imageIndex} onClick={() => goToSlide(imageIndex)} style={{backgroundImage: `url(${images[imageIndex]})`}} data-index={imageIndex===currentIndex} className='h-[50px] min-w-16 mx-1 bg-center bg-cover brightness-50 cursor-pointer data-[index="true"]:brightness-100'></div>
                ))}
            </div>        
        </div>
        {/*Video gallery*/}
        <div data-gallery={gallery==="video"} className='w-full p-2 bg-five hidden data-[gallery="true"]:block'>
            <div className='h-[400px] m-auto flex'>
                <YoutubePlayer url={video[currentVideoIndex]} controls style={{margin: "auto", height: "fit-content"}}/>
            </div>
            <div className='w-full h-[50px] overflow-hidden flex justify-center mt-2'>
                {video.map((video, videoIndex) => (
                    <div key={videoIndex} data-index={videoIndex===currentVideoIndex} className='h-[50px] mx-1 brightness-50 cursor-pointer data-[index="true"]:brightness-100 data-[index="true"]:cursor-default' >
                        <div className='h-[50px] w-[70px] bg-transparent absolute top-0 left-0' onClick={() => goToVideo(videoIndex) }></div>
                        <YoutubePlayer key={videoIndex} url={video} height={50} width={70} light playIcon={"false"} />
                    </div>
                ))}
            </div>        
        </div>
    </div>
  )
}
