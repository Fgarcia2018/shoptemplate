import React from "react";
import { ShopContext } from "../../Context";
import './FormCliente.css'
import { Link } from "react-router-dom";

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
            <form className="form-cliente" onSubmit={(event)=>{event.preventDefault();sendData()}}>  
                <input type="text"  id="idclient" placeholder="Identificación" required></input>
                <input type="text" id="nameclient" placeholder="Nombres" required></input>
                <input type="text" id="lastnameclient" placeholder="Apellidos" required></input>
                <input type="text"
                        pattern="[0-9]{10}" 
                        id="numberphone" 
                        placeholder="Numero Telefono"
                        title="Ingresa un número de teléfono, 10 digitos"
                        required>
                </input>
                <input type="email" id="email" placeholder="E-mail" required></input>
                <div className="form-cliente-horary">
                    <h3>Horario</h3>
                    <div className="form-cliente-date_time">
                        <label>Fecha</label>                  
                        <input type="date" id="date" placeholder="Fecha" required></input>
                        <label>Hora</label>              
                        <input type="time" id="time" placeholder="Hora" required></input>
                        
                        <button type="submit" >Registrar</button>
                         <Link to={'/'}><button >Regresar</button></Link>
                    </div>                
                </div>
            </form>
        </>
    )
}