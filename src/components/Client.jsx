
export const Client = () => {
    const data = [
        {
            name: "Tel./Fax: (598) 2288 2342"
        },
        {
            name : 'sac@canarias.com.uy'
        },
        {
            name : 'Ruta 101 km. 30.500 Barros Blancos.'
        },
        {
            name : 'Canelones, Uruguay.'
        }
    ]
    return (
    <ul>
        {data.map((item, key)=>(
            <li key={key}>
                <span className='text-secondary text-xl
                traistion-all duration-300 hover:text-primary'>
                    {item.name}
                </span>
            </li>
        ))}
    </ul>
  )
}
