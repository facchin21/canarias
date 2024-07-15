import Yerba from '../assets/image/yerba.png'
import imagenBackground from '../assets/image/blur.png'

export const Banner = () => {
  const title = "Canarias"
    return (
    <div className="bg-primary px-48 pb-20 relative w-full">
        <header>
            <h1 className="font-Fugaz text-12xl text-secondary font-light text-center pt-20 pb-12 z-20">
                {title}
            </h1>
        </header>
        <div className='flex py-12 justify-center'>
            <div className='z-10'>
                <h2 className='font-Archivo text-8xl'>
                    Canarias EDICIÓN ESPECIAL
                </h2>
            </div>
            <div className='w-full z-10'>
                <img src={Yerba} alt={`Imagen sobre yerba ${title}`} className='w-full image__canarias'/>
            </div>
        </div>
        <img src={imagenBackground} alt="Imagen de fondo" className='absolute top-56 -inset-3 z-0'/>
    </div>
  )
}
