import React from "react";
import { ShopContext } from "../Context";
import { HashLink as Link} from "react-router-hash-link";


export const Menu=()=>{
    const{      
        services,
    }=React.useContext(ShopContext)

   return(
    <aside className="App-menu">
        <ul>
            <li>
                <a href="/" className="App-menu-option">Home</a>
            </li>
            <li>
            <a href="#Servicios" className="App-menu-option">Servicios</a>
                <ul>
                    {services.map((service)=>(                                                    
                    <li key={service.id}><Link smooth to={'#'+service.nombreservicio} className="App-menu-option">{service.nombreservicio.toLowerCase()}</Link></li>
                    ))}
                </ul>              
            </li>            
            <li>
             
                <Link smooth to="#container-aboutUs" >Sobre nosotros</Link>
            </li>
            <li>
                <Link smooth to="#container-contact" className="App-menu-option">Contactanos</Link>
            </li>

        </ul>
    </aside>
   );
}