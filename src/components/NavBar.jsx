import logo from '../assets/logoProvisorio.png'
import { LanguageSel } from './LanguageSel'
import instagram from '../assets/imgsocmed/instagram.png'
import facebook from '../assets/imgsocmed/facebook.png'
import youtube from '../assets/imgsocmed/youtube.png'
import whatsapp from '../assets/imgsocmed/whatsapp.png'
import { NavCenterMenu } from './NavCenterMenu'

export const NavBar = () => {
  return (
    <div className="navbar bg-one text-two h-28 sticky top-0 z-10">
        <div className="navbar-start">
            <a href="/" className="text-lg flex items-center">
                <img src={logo} alt="V&G" className="max-w-20 md:max-w-32"/>
                <div className='grid justify-items-start'>
                    <p className='font-semibold  text-sm md:text-lg'>VALGUT</p>
                    <p className='text-xs md:text-base'>PROPIEDADES</p>
                </div>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <NavCenterMenu></NavCenterMenu>
        </div>
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content rounded-box mt-3 -mr-2 min-w-80 p-2 shadow bg-one text-two">
                    {/*See if it´s posible to add a tabindex{0} to all collapse elements so they dont remain open when you tap outside them*/}
                    <li>
                        <details>
                            <summary>VENTAS</summary>
                            <ul className="p-2">
                                <li><a href="#">CASAS</a></li>
                                <li><a href="#">DEPARTAMENTOS</a></li>
                                <li><a href="#">LOCALES</a></li>
                                <li><a href="#">GALPONES</a></li>
                                <li><a href="#">TERRENOS</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>ALQUILERES</summary>
                            <ul className="p-2">
                                <li><a href="#">CASAS</a></li>
                                <li><a href="#">DEPARTAMENTOS</a></li>
                                <li><a href="#">LOCALES</a></li>
                                <li><a href="#">GALPONES</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>TEMPORARIOS</summary>
                            <ul className="p-2">
                                <li><a href="#">CASAS</a></li>
                                <li><a href="#">DEPARTAMENTOS</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="#">CONTACTO</a></li>
                </ul>
            </div>
            <div className="place-items-center hidden lg:grid">
                <div className="flex my-2">
                    <div><LanguageSel></LanguageSel></div>
                    <div className='flex ml-5'>
                        <a href="" target="_blank" rel="noopener noreferrer" className='mx-1 max-w-6'><img src={ instagram } alt="Instagram" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" className='mx-1 max-w-6'><img src={ facebook } alt="Facebook" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" className='mx-1 max-w-6'><img src={ youtube } alt="Youtube" /></a>
                    </div>
                </div>
                <div className='flex my-2 text-sm'>
                    <a href="https://wa.me/543513157171" target="_blank" rel="noopener noreferrer" className='flex link link-hover items-center'><img src={ whatsapp } alt="Whatsapp" className='max-h-5'/>+54 351 3157171</a>
                    <a href="https://wa.me/543516770964" target="_blank" rel="noopener noreferrer" className='flex ml-2 link link-hover items-center'><img src={ whatsapp } alt="Whatsapp" className='max-h-5'/>+54 351 6770964</a>
                </div>
            </div>
        </div>
    </div>
  )
}
