import React from "react";
import { ShopContext } from "../../Context";
import './ReserveConfirmed.css';

export const ReserveConfirmed=()=>{

    const {
        serviceconfirmed,
        serviceselected,
        addReserve,
        formatCurrency,   
        setOpenModal,     
        setShowMessage    
    }=React.useContext(ShopContext);

    const closeModal=()=>{
        setOpenModal(false);
    } 
    const Message=()=>{
        setShowMessage(true);
        setTimeout(()=>{
            setShowMessage(false);            
          document.location.hash='/'
            
        },3000);
    }
    return (
           <>               
                <div className="container-serviceConfirmed">
                    {serviceconfirmed[0].nameClient} {serviceconfirmed[0].lastnameClient}, tu turno para {serviceselected[0].nameService}, ha sido programado para el {serviceconfirmed[0].date} a las {serviceconfirmed[0].time}, el valor a pagar es $ {formatCurrency(serviceselected[0].priceService)}                
                    <div className="serviceConfirmed-buttons">
                        <button onClick={()=>{
                        addReserve();
                        closeModal();
                        Message();
                        }} >Confirmar
                        </button>
                        <button onClick={closeModal}>Cancelar</button> 
                    </div>  
                </div>  
           </> 
       
    )
}


