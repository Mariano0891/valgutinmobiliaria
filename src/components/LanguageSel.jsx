import english from '../assets/imglanguages/english.png'
import spanish from '../assets/imglanguages/spanish.png'
import portuguese from '../assets/imglanguages/portuguese.png'

export const LanguageSel = () => {
  return (
    <div className='flex'>
        <a href="" className='mx-1 opacity-50 max-w-6 hover:opacity-100'><img src={ spanish } alt="Español" /></a>
        <a href="" className='mx-1 opacity-50 max-w-6 hover:opacity-100'><img src={ portuguese } alt="Portugues" /></a>
        <a href="" className='mx-1 opacity-50 max-w-6 hover:opacity-100'><img src={ english } alt="Ingles" /></a>
    </div>
  )
}
