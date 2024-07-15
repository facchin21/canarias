import imagenBackground from '../assets/image/blur.png'

// eslint-disable-next-line react/prop-types
export const Article = ({number, title, descripcion,left}) => {
  return (
    <article className="bg-primary" id='sobreMi'>
    {left ? (
      <div className='flex gap-12 px-48 py-52 items-center justify-center relative'>
        <div className='z-20'>
            <h1 className="font-Fugaz text-secondary text-13xl">
              {number}
            </h1>
        </div>
        <div className='font-Almarai z-20'>
          <h1 className='font-black text-7xl z-20'>{title}</h1>
          <p className='text-2xl font-thin z-20'>{descripcion}</p>
        </div>
        <img src={imagenBackground} alt="Imagen de fondo" className='absolute top-0 z-10 opacity-70' />
      </div>
        )
        :
        (
        <div className='flex gap-12 px-48 py-52 items-center justify-center relative'>
          <div className='font-Almarai z-20'>
              <h1 className='font-black text-7xl z-20'>{title}</h1>
              <p className='text-2xl font-thin z-20'>{descripcion}</p>
          </div>
          <div className='z-20'>
            <h1 className="font-Fugaz text-secondary text-13xl z-20">
              {number}
            </h1>
          </div>
          <img src={imagenBackground} alt="Imagen de fondo" className='absolute -top-20 z-10 opacity-70' />
        </div>
        )}
    </article>
  )
}
