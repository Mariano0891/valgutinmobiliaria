import portada from '../assets/imagenesportada/sierrasPortada.jpg'
import { CarouselHome } from '../components/CarouselHome'
import { ListContainer } from '../components/ListContainer'
import { PreviewCard } from '../components/PreviewCard'

export const Home = () => {
  return (
    <div className=''>
       <CarouselHome></CarouselHome>
       <h2 className='text-center my-4 text-xl md:text-3xl text-one font-bold'>INMUEBLES DESTACADOS</h2>
       <ListContainer></ListContainer>
    </div>
  )
}
