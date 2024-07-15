// eslint-disable-next-line react/prop-types
export const ItemNavbar = ({title, link}) => {
  return (
      <a href={link} className="font-Almarai font-medium text-2xl
      transition-all duration-700 hover:text-lime-200">
        {title}
      </a>
  )
}
