import React from "react";
import { ShopContext } from "../../Context";
import menu from "../../assets/menu.svg";
import image_main_1 from '../../assets/image_main_1.jpg';
import { Menu } from "../Menu";


export const Header=()=>{
    const{
        showMenu,
        setShowmenu
        // services,
    }=React.useContext(ShopContext);

    return (

        <header className="App-header">
            <div className="App-header-image">
                <img src={image_main_1} alt="header-imagen"/>
            </div>
            <div className='App-header-title'>                
                LONDON BARBER SHOP
            </div>
            <div className='App-header-menu'>
            <img src={menu} alt='icono menu' onClick={()=> setShowmenu(!showMenu)}/>
            </div>
            <Menu ></Menu>        
        </header>    

    )
}