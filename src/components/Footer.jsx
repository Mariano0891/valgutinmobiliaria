import logo from '../assets/logoProvisorio.png'
import whatsapp from '../assets/imgsocmed/whatsapp.png'

export const Footer = () => {
  return (
    <footer className="footer bg-one text-two p-10">
        <aside className="grid justify-items-center">
            <a href="" className="-mb-2">
                <img src={logo} alt="V&G" className="w-48"/>
            </a>
            <div className="grid justify-items-center">
            <p className="footer-title text-xl">INMOBILIARIA</p>
            </div>
        </aside>
        <nav>
            <h6 className="footer-title">CONTACTO</h6>
            <a className="link link-hover"></a>
            <a href="" className='flex mr-2 link link-hover'><img src={ whatsapp } alt="Whatsapp" className='max-w-6'/>+54 351 5149036</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
        </nav>
    </footer>
  )
}
