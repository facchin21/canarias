import Logo from '../assets/image/Logo.png'
import { ItemNavbar } from './ItemNavbar'
import imagenBackground from '../assets/image/blur-nav.png'


export const Navbar = () => {
    const title = "Canarias"
    return (
    <nav className='bg-primary relative flex items-center justify-between px-48 container__navbar'>
        <div className='z-20'>
            <ItemNavbar title={"Sobre Mi"} link={"#sobreMi"}/>
        </div>
        <div className='w-32 z-20'>
            <img src={Logo} alt={`Imagen de ${title}`}/>
        </div>
        <div className='z-20'>
            <ItemNavbar title={"Contacto"} link={"#contact"}/>
        </div>
        <img src={imagenBackground} alt="fondo navbar" className='absolute opacity-70 -top-12 z-10' />
    </nav>
  )
}
