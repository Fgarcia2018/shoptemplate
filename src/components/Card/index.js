import React from "react";
import { ShopContext } from "../../Context";
import './Card.css'

export const Card=()=>{
  const{
    serviceselected,
    formatCurrency
  }=React.useContext(ShopContext)


    return(
       <>
          <div className="Card">
              <h3>Tu Servicio</h3>            
              <spam>{serviceselected[0].nameService}</spam>     
              <spam>Valor a pagar: ${formatCurrency(serviceselected[0].priceService)}</spam>
          </div>    
       </>
    )
}