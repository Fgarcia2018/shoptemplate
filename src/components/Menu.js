import React from "react";
import { ShopContext } from "../Context";

export const Menu=()=>{
    const{
        // showMenu,
        // setShowmenu,
        services,
    }=React.useContext(ShopContext)

   return(
    <aside className="App-menu">
        <ul>
            <li>
                <a href="/" className="App-menu-option">Home</a>
            </li>
            <li>
            <a href="#servicios" className="App-menu-option">Servicios</a>
                <ul>
                    {services.map((service)=>(                                                    
                    <li key={service.id}><a href={'#'+service.nombreservicio} className="App-menu-option">{service.nombreservicio.toLowerCase()}</a></li>
                    ))}
                </ul>              
            </li>            
            <li>
                <a href="#container-aboutUs" className="App-menu-option">Sobre nosotros</a>
            </li>
            <li>
                <a href="#container-contact" className="App-menu-option">Contactanos</a>
            </li>

        </ul>
    </aside>
   );
}