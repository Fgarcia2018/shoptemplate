import menu from './assets/menu.svg'
import image_main_1 from './assets/image_main_1.jpg'

import './App.css';
import { Service } from './components/Service';

import { useEffect, useState  } from 'react';

import { Menu } from './components/Menu';


function App() {
  const [showMenu,setShowmenu]=useState(false) 

  const API='https://otherappinventario.000webhostapp.com/apiServicios'

  const [services,setServices]=useState([])
  const [load,setLoad]=useState(true)
  useEffect(()=>{         
         const getService= async()=>{
                let response=await fetch(API)
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

  // const showMainMenu=(services)=>{
  //   if(showMenu)return(<Menu services={services}></Menu>)
  // }
 
  return (
    <div className="App">
      <header className="App-header">
            <div className='App-header-title'>
                LONDON BARBER SHOP
            </div>
            <div className='App-header-menu'>
            <img src={menu} alt='icono menu' onClick={()=> setShowmenu(!showMenu)}/>
            </div>
            <Menu services={services}></Menu>
           
      </header>
        {/* {showMainMenu(services)}         */}
      
      <main className='App-main'>
             
           <article>
              <img src={image_main_1} alt='imagen corte de barba'/>
              <p>barbería clásica, retomando los rituales y procedimientos clasicos de arreglo de baraba y corte de cabello</p>
           </article>
           <section id='servicios'>
                <h1>Servicios</h1>
                {load? 'cargando...': services.map(service=>(
                   <Service key={service.id} name={service.nombreservicio} price={service.valorservicio}/>    
                ))}
                           
           </section>
      </main>
      <footer className='App-footer'>
          © 2024 Fernando García
      </footer>
    </div>
  );
}

export default App;
