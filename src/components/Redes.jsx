import imageInstagram from '../assets/image/icon-instagram.png'
import imageFacebook from '../assets/image/icon-facebook.png'
import imageYoutube from '../assets/image/icon-youtube.png'


export const Redes = () => {
  const redes = [
    {
        name: "YerbaCanariasOficial",
        image : imageInstagram,
        link: "https://www.instagram.com/yerbacanariasoficial/"
    },
    {
        name : "YerbaCanariasOficial",
        image : imageFacebook,
        link : "https://www.facebook.com/yerbacanariasoficial/"
    },
    {
        name : "CanariasYerba",
        image : imageYoutube,
        link : "https://www.youtube.com/user/CanariasYerba"
    }
  ]
    return (
    <div>
        {redes.map((item, key) => (
            <a href={item.link} target='_blank' key={key} 
            className='flex gap-3 items-center'>
                <img src={item.image} alt={`imagen de ${item.name}`} />
                <span className='text-secondary text-xl
                traistion-all duration-300 hover:text-primary'>
                    {item.name}
                </span>
            </a>
        ))}
    </div>
  )
}
