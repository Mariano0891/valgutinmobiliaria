import contactData from '../../assets/contactData.json'
import whatsapp from '../../assets/imgsocmed/whatsapp.png'
import mail from '../../assets/imgsocmed/mail.png'


export const Contact = (property) => {
  return (
    <div className='bg-five w-full max-w-[700px] lg:max-w-[500px]'>
        <h3 className='p-4 font-bold'>CONSULTANOS</h3>
        <div className='flex flex-wrap justify-evenly pb-2'>
            <a href={"https://wa.me/"+(contactData.celFeli).replace(/\s+/g, '')} target="_blank" rel="noopener noreferrer" className='flex link link-hover items-center'><img src={ whatsapp } alt="Whatsapp" className='max-h-5'/>+{contactData.celFeli}</a>
            <a href={"https://wa.me/"+(contactData.celPaola).replace(/\s+/g, '')} target="_blank" rel="noopener noreferrer" className='flex ml-2 link link-hover items-center'><img src={ whatsapp } alt="Whatsapp" className='max-h-5'/>+{contactData.celPaola}</a>
            <a href={"mailto:"+contactData.email+"?subject=Consulta general"} target="_blank" rel="noopener noreferrer" className='flex items-center link link-hover'><img src={ mail } alt="mail" className='max-h-6'/>{contactData.email}</a>  
        </div>
    </div>
  )
}
