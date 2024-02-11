import React, { useEffect, useState } from "react";
export const ShopContext=React.createContext();

export const ShopProvider=({children})=>{
    const [showMenu,setShowmenu]=useState(false) 

    const API='https://otherappinventario.000webhostapp.com/'
  
    const [services,setServices]=useState([])
    const [load,setLoad]=useState(true)  
    const [serviceselected,setServiceselected]=useState([])
    const [serviceconfirmed,setServiceconfirmed]=useState([])
    const [openModal,setOpenModal]=useState(false)
    const [showMessage,setShowMessage]=useState(false)

    useEffect(()=>{         
           const getService= async()=>{
                  let response=await fetch(API+'apiServicios')
                  let services=await response.json()                
                  if(localStorage.getItem('services')==null){
                    localStorage.setItem('services',JSON.stringify(services));       
                }else{
                    localStorage.setItem('services',JSON.stringify(services));
                }               
                setServices(JSON.parse(localStorage.getItem('services')))
            };  getService()
    },[])   
  
    setTimeout(() => {
      setLoad(false)
    }, 2000); 

    const formatCurrency=(number)=>{
        let numberFormated=new Intl.NumberFormat("es-CO").format(number)
        return numberFormated
    }

    const addServices=(id,name,price)=>{

            setServiceselected(
                [{
                            id:id,
                            nameService:name,
                            priceService:price
                        }]
            )              
        
    }

    const addServiceconfirmed=(idClient,nameClient,LastnameClient,numberPhone,email,date,time,idService)=>{
            setServiceconfirmed(
                [{
                    idClient:idClient,
                    nameClient:nameClient,
                    lastnameClient:LastnameClient,
                    numberPhone:numberPhone,
                    email:email,
                    date:date,
                    time:time,
                    idService:idService
                }]
            )
            setOpenModal(true)
            }  
            
    const addReserve=async()=>{
        await fetch(API+'/newcita/setcita',{
        method:'POST',
        mode:'cors',
        credentials:'same-origin',       
        body:JSON.stringify(serviceconfirmed)
    });        
    }
      
    return(
        <>
            <ShopContext.Provider value={
                {   
                    formatCurrency,
                    showMenu,
                    setShowmenu,
                    services,
                    setServices,
                    load,
                    setLoad,
                    serviceselected,
                    setServiceselected,
                    addServices,
                    serviceconfirmed,
                    setServiceconfirmed,
                    addServiceconfirmed,
                    addReserve,
                    openModal,
                    setOpenModal,
                    showMessage,
                    setShowMessage                  
                }
            }>
                {children}
            </ShopContext.Provider>
        </>
      
    )
}

