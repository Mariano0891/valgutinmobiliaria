import contactData from '../../assets/contactData.json'
import whatsapp from '../../assets/imgsocmed/whatsapp.png'
import mail from '../../assets/imgsocmed/mail.png'


export const Contact = ({property}) => {
  return (
    <div className='bg-five w-full max-w-[700px]'>
        <h3 className='p-4 font-bold'>CONSULTANOS</h3>
        <div className='flex flex-wrap justify-evenly pb-2 gap-2'>
            <a href={"https://wa.me/"+(contactData.celCorporate).replace(/\s+/g, '')+`?text=Quisiera%20consultarles%20por%20la%20propiedad%20${property.code}`} target="_blank" rel="noopener noreferrer" className='flex link link-hover items-center'><img src={ whatsapp } alt="Whatsapp" className='max-h-5'/>+{contactData.celCorporate}</a>
            <a href={"mailto:"+contactData.email+`?subject=Consulta por propiedad ${property.code}`} target="_blank" rel="noopener noreferrer" className='flex items-center link link-hover'><img src={ mail } alt="mail" className='max-h-6'/>{contactData.email}</a>  
        </div>
    </div>
  )
}
