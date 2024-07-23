import portada from '../assets/imagenesportada/sierrasPortada.jpg'

export const Home = () => {
  return (
    <div className='grid place-items-stretch'>
        <img src={portada} alt="Sierras de Cordoba" />
    </div>
  )
}
