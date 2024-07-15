import './index.css'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Article } from './components/Article'
import {articles} from './data/articles'
import { Footer } from './components/Footer'

function App() {
  
  return (
    <>
      <Navbar/>
      <Banner/>
      {articles.map((item )=>(
        <Article key={item.number}
         number={item.number}
          title={item.title}
          descripcion={item.descripcion}
          left={item.left}/>
      ))}
      <Footer/>
    </>
  )
}

export default App
