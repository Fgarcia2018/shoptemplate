import React from "react";
import { ShopContext } from "../../Context";
import { Link } from "react-router-dom";
import image_service_null from '../../assets/image_service_null.png';
import './Service.css';

export const Service=({id,name,price,image})=>{   
  const{    
    addServices,
    formatCurrency  
  }=React.useContext(ShopContext)  
   return(    

        <figure className="container-service" >    
                <div id={name} className="container-service-img" style={{       
                    backgroundImage:image==null?'url('+image_service_null+')':'url(https://otherappinventario.000webhostapp.com/'+image,
                gridArea:'service'+id
                    
                    }} >
                </div> 
                <figcaption className="container-service-detail">
                <h3 >{name}</h3>
                <h3>${formatCurrency(price)}</h3>
                    <Link to={'../Reserva'}>
                        <button onClick={()=>{                  
                            addServices(id,name,price);                                              
                            }
                            }>Reserva</button>
                    </Link>
                </figcaption>
    </figure>
   );
}