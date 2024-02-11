import React from "react";
import { ShopContext } from "../../Context";
import { Link } from "react-router-dom";
import image_service_null from '../../assets/image_service_null.jpg';
import './Service.css';

export const Service=({id,name,price,image})=>{   
  const{    
    addServices,
    formatCurrency  
  }=React.useContext(ShopContext)  
   return(
    <div className="container-service" style={{       
        backgroundImage:image==null?'url('+image_service_null+')':'url(https://otherappinventario.000webhostapp.com/'+image,
        gridArea:'service'+id
        
        }} >
        <h3 id={name}>{name}</h3>
        {/* <div>
            <img src={image==null? image_service_null : 'https://otherappinventario.000webhostapp.com/'+image}
             alt={image} className="img-service"/>
        </div> */}
            <h3>${formatCurrency(price)}</h3>
        <div className="service-button">
            <Link to={'../Reserva'}>
                <button onClick={()=>{                  
                    addServices(id,name,price);                                              
                    }
                    }>Reserva</button>
            </Link>
        </div>
    </div>
   );
}