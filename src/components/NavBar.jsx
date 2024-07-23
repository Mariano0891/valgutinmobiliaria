import logo from '../assets/logoProvisorio.png'
import { LanguageSel } from './LanguageSel'
import instagram from '../assets/imgsocmed/instagram.png'
import facebook from '../assets/imgsocmed/facebook.png'
import youtube from '../assets/imgsocmed/youtube.png'
import whatsapp from '../assets/imgsocmed/whatsapp.png'

export const NavBar = () => {
  return (
    <div className="navbar bg-one text-two h-28">
        <div className="navbar-start">
            <a href="" className="text-xl flex items-center">
                <img src={logo} alt="V&G" className="h-16"/>
                <p>V&G INMOBILIARIA</p>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <nav className='flex justify-center'>
                <ul className='flex flex-wrap items-center'>
                    <li className="p-4 px-6 relative flex items-center space-x-1"
                    x-data="{ open: false }" 
                    @mouseenter="open = true"
                    @mouseleave="open = false"
                    >
                        <a href="" className="hover:text-three">VENTAS</a>
                        <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-one border border-slate-200 p-2 rounded-lg shadow-xl">
                            <li><a href="" className="hover:text-three p-2 flex items-center">CASAS</a></li>
                            <li><a href="" className="hover:text-three p-2 flex items-center">DEPARTAMENTOS</a></li>
                            <li><a href="" className="hover:text-three p-2 flex items-center">LOCALES</a></li>
                            <li><a href="" className="hover:text-three p-2 flex items-center">GALPONES</a></li>
                            <li><a href="" className="hover:text-three p-2 flex items-center">TERRENOS</a></li>
                        </ul>
                    </li>
                    <li className="p-4 px-6 relative flex items-center space-x-1">
                        <a href="" className="hover:text-three">ALQUILERES</a>
                        <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-one border border-slate-200 p-2 rounded-lg shadow-xl">
                            <li><a href="" className="hover:text-three p-2 flex items-center">CASAS</a></li>
                            <li><a href="" className="hover:text-three p-2 flex items-center">DEPARTAMENTOS</a></li>
                            <li><a href="" className="hover:text-three p-2 flex items-center">LOCALES</a></li>
                            <li><a href="" className="hover:text-three p-2 flex items-center">GALPONES</a></li>
                        </ul>
                    </li>
                    <li className="p-4 px-6 relative flex items-center space-x-1">
                        <a href="" className="hover:text-three">TEMPORARIOS</a>
                        <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-one border border-slate-200 p-2 rounded-lg shadow-xl">
                            <li><a href="" className="hover:text-three p-2 flex items-center">CASAS</a></li>
                            <li><a href="" className="hover:text-three p-2 flex items-center">DEPARTAMENTOS</a></li>
                        </ul>
                    </li>
                    <li className="p-4 px-6 relative flex items-center space-x-1">
                        <a href="" className="hover:text-three">CONTACTO</a>
                    </li>
                </ul>
            </nav>
            {/*<ul className="menu menu-horizontal px-1">
                <li>
                    <details>
                        <summary>VENTAS</summary>
                        <ul className="p-2">
                            <li><a>CASAS</a></li>
                            <li><a>DEPARTAMENTOS</a></li>
                            <li><a>LOCALES</a></li>
                            <li><a>GALPONES</a></li>
                            <li><a>TERRENOS</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>ALQUILERES</summary>
                        <ul className="p-2">
                            <li><a>CASAS</a></li>
                            <li><a>DEPARTAMENTOS</a></li>
                            <li><a>LOCALES</a></li>
                            <li><a>GALPONES</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>TEMPORARIOS</summary>
                        <ul className="p-2">
                            <li><a>CASAS</a></li>
                            <li><a>DEPARTAMENTOS</a></li>
                        </ul>
                    </details>
                </li>
                <li><a>CONTACTO</a></li>
            </ul>*/}
        </div>
        <div className="navbar-end">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                    className="menu menu-sm dropdown-content rounded-box mt-3 -ml-24 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>s
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="grid place-items-center">
                <div className="flex my-2">
                    <div><LanguageSel></LanguageSel></div>
                    <div className='flex mx-5'>
                        <a href="" target="_blank" rel="noopener noreferrer" className='mx-1 max-w-6'><img src={ instagram } alt="Instagram" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" className='mx-1 max-w-6'><img src={ facebook } alt="Facebook" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" className='mx-1 max-w-6'><img src={ youtube } alt="Youtube" /></a>
                    </div>
                </div>
                <div className='flex my-2'>
                    <a href="https://wa.me/543512168041" target="_blank" rel="noopener noreferrer" className='flex mx-2 link link-hover'><img src={ whatsapp } alt="Whatsapp" className='max-w-6'/>+54 351 5149036</a>
                    <a href="https://wa.me/543512168041" target="_blank" rel="noopener noreferrer" className='flex mx-2 link link-hover'><img src={ whatsapp } alt="Whatsapp" className='max-w-6'/>+54 351 5149036</a>
                </div>
            </div>
        </div>
    </div>
  )
}
