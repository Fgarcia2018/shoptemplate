import React, { useContext } from "react";
import { FormCliente } from "../../components/FormCliente";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { ShopContext } from "../../Context";
import { ReserveConfirmed } from "../ReserveConfirmed";
import { Message } from "../../components/Message";
import './Reserve.css';


export const Reserve=()=>{ 
    const{
        openModal,
        showMessage
    }=useContext(ShopContext);   
 
    return(
       <>
            <div className="container-reserve">
                 <Card/>
                 <h3>Registra tus datos</h3>   
                <FormCliente/>
            </div>
            {openModal && (
                    <Modal>
                        <ReserveConfirmed/>
                    </Modal>
                )}
            {showMessage && (
                    <Modal>
                        <Message/> 
                    </Modal> 
                )}
       </>
    )
}