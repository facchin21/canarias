import Yerba from '../assets/image/yerba.png'
import imagenBackground from '../assets/image/blur.png'

export const Banner = () => {
  const title = "Canarias"
    return (
    <div className="bg-primary px-72 pb-20 relative w-full flex flex-col items-center">
        <header>
            <h1 className="font-Fugaz text-13xl text-secondary font-light text-center pt-20 pb-20 z-20">
                {title}
            </h1>
        </header>
        <div className='flex py-12 justify-center items-center w-10/12'>
            <div className='z-10'>
                <h2 className='font-Archivo text-9xl w-full'>
                    Canarias EDICIÓN ESPECIAL
                </h2>
            </div>
            <div className='w-11/12 z-10'>
                <img src={Yerba} alt={`Imagen sobre yerba ${title}`} className='w-full image__canarias'/>
            </div>
        </div>
        <img src={imagenBackground} alt="Imagen de fondo" className='absolute top-80 inset-22 z-0'/>
    </div>
  )
}
