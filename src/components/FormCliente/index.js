import React from "react";
import { ShopContext } from "../../Context";
import './FormCliente.css'

export const FormCliente=()=>{
    const
        {serviceselected,
        addServiceconfirmed,   
        }=React.useContext(ShopContext)  

        console.log('Servicio seleccionado:'+JSON.stringify(serviceselected)); 

    const sendData=()=>{
        let idclient=document.querySelector("#idclient");
        let nameclient=document.querySelector("#nameclient");
        let lastnameclient=document.querySelector("#lastnameclient");
        let numberphone=document.querySelector("#numberphone");
        let email=document.querySelector("#email");
        let date=document.querySelector("#date");
        let time=document.querySelector("#time");
        addServiceconfirmed(idclient.value,nameclient.value,lastnameclient.value,numberphone.value,email.value,date.value,time.value,serviceselected[0].id)
  
    }
       
    return(
        <>
            <form className="form-cliente" onSubmit={(event)=>{event.preventDefault()}}>  
                <input type="text"  id="idclient" placeholder="Identificación"></input>
                <input type="text" id="nameclient" placeholder="Nombres"></input>
                <input type="text" id="lastnameclient" placeholder="Apellidos"></input>
                <input type="text" id="numberphone" placeholder="Numero Telefono"></input>
                <input type="text" id="email" placeholder="E-mail"></input>
                <h3>Horario</h3>
                <div className="form-cliente-date_time">
                    <label>Fecha</label>                  
                    <input type="date" id="date" placeholder="Fecha"></input>
                    <label>Hora</label>
                    <input type="time" id="time" placeholder="Hora"></input>
                </div>                
                         <button onClick={()=>{
                            sendData() 
                        }}>Registrar</button>
            </form>
        </>
    )
}