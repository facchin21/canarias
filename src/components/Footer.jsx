import { Client } from "./Client"
import { Redes } from "./Redes"


export const Footer = () => {
  return (
    <footer id="contact" className="bg-footer px-128 py-20 font-Almarai flex justify-between">
        <div>
             <h3 className="text-4xl pb-8 text-secondary">
                Redes
            </h3>
            <Redes/>
        </div>
        <div>
            <h3 className="text-4xl pb-8 text-secondary">
                Atencion al cliente
            </h3>
            <Client/>
        </div>
    </footer>
  )
}
