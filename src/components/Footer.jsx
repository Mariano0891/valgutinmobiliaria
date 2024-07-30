import logo from '../assets/logoProvisorio.png'
import whatsapp from '../assets/imgsocmed/whatsapp.png'
import mail from '../assets/imgsocmed/mail.png'
import instagram from '../assets/imgsocmed/instagram.png'
import facebook from '../assets/imgsocmed/facebook.png'
import youtube from '../assets/imgsocmed/youtube.png'

export const Footer = () => {
  return (
    <>
    {/*lg / md footer*/}
    <footer className="footer bg-one text-two p-4 hidden md:flex justify-around">
        <aside className="grid-flow-col items-center my-auto">
            <a href="/" className="">
                <img src={logo} alt="V&G" className="max-w-32"/>
            </a>
            <div className='grid justify-items-start'>
                <h4>VALGUT</h4>
                <p>PROPIEDADES</p>
            </div>
        </aside>
        <nav>
            <h6 className="footer-title">CONTACTO</h6>
            <a href="https://wa.me/543513157171" target="_blank" rel="noopener noreferrer" className='flex items-center link link-hover'><img src={ whatsapp } alt="Whatsapp" className='max-h-6'/>+54 351 3157171</a>
            <a href="https://wa.me/543516770964" target="_blank" rel="noopener noreferrer" className='flex items-center link link-hover'><img src={ whatsapp } alt="Whatsapp" className='max-h-6'/>+54 351 6770964</a>
            <a href="mailto:valgutpropiedades@gmail.com?subject=Consulta general" target="_blank" rel="noopener noreferrer" className='flex items-center link link-hover'><img src={ mail } alt="mail" className='max-h-6'/>valgutpropiedades@gmail.com</a>
        </nav>
        <nav>
            <h6 className="footer-title">LINKS</h6>
            <a href="#" className="link link-hover">VENTAS</a>
            <a href="#" className="link link-hover">ALQUILERES</a>
            <a href="#" className="link link-hover">TEMPORARIOS</a>
            <div className='flex'>
                <a href="" target="_blank" rel="noopener noreferrer" className='mr-2 max-w-6'><img src={ instagram } alt="Instagram" /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className='mr-2 max-w-6'><img src={ facebook } alt="Facebook" /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className='mr-2 max-w-6'><img src={ youtube } alt="Youtube" /></a>
            </div>
        </nav>
    </footer>
    {/*sm footer*/}
    <footer className="footer footer-center bg-one text-two p-4 md:hidden">
        <aside className="grid-flow-col items-center -mb-2">
            <a href="/" className="">
                <img src={logo} alt="V&G" className="max-w-20"/>
            </a>
            <div className='grid justify-items-start'>
                <h4>VALGUT</h4>
                <p>PROPIEDADES</p>
            </div>
        </aside>
        <nav className="grid grid-flow-col gap-2 -my-12">
            <a href="#" className="link link-hover">VENTAS</a>
            <a href="#" className="link link-hover">ALQUILERES</a>
            <a href="#" className="link link-hover">TEMPORARIOS</a>
        </nav>
        <nav className="grid grid-col gap-2 -my-4">
            <a href="https://wa.me/543513157171" target="_blank" rel="noopener noreferrer" className='flex items-center link link-hover'><img src={ whatsapp } alt="Whatsapp" className='max-h-6'/>+54 351 3157171</a>
            <a href="https://wa.me/543516770964" target="_blank" rel="noopener noreferrer" className='flex items-center link link-hover'><img src={ whatsapp } alt="Whatsapp" className='max-h-6'/>+54 351 6770964</a>
        </nav>

        <nav>
            <div className="grid grid-flow-col gap-4">
                <a href="" target="_blank" rel="noopener noreferrer" className='max-w-6'><img src={ instagram } alt="Instagram" /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className='max-w-6'><img src={ facebook } alt="Facebook" /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className='max-w-6'><img src={ youtube } alt="Youtube" /></a>
            </div>
        </nav>
    </footer>
    {/*Footer for developer info*/}
    <footer className="footer footer-center bg-one text-two p-1">
        <aside className="grid-flow-col items-center">
            <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current">
            <path
                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <div className='grid justify-items-start'>
                <h4>ANTMAR - servicios digitales</h4>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </aside>
    </footer>
  </>
  )
}
