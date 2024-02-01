import React from "react";
export const Service=({name,price})=>{  

   return(
    <div>
        <h2 id={name}>{name}</h2>
        <div>
            <img src="" alt=""/>
        </div>
            <h3>{price}</h3>
        <div>
            <button>Reserva</button>
        </div>
    </div>
   );
}