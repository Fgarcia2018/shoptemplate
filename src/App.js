import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import {Reserve} from './Pages/Reserve';
import { ReserveConfirmed } from './Pages/ReserveConfirmed';
import { ShopProvider } from './Context';


export const AppRoutes=()=>{
  let routes=useRoutes([
    {path:'/Home', element: <Home/>},   
    {path:'/',element: <Home/>},    
    {path:'/Reserva',element: <Reserve/>},
    {path:'/ConfirmacionReserva',element:<ReserveConfirmed/>}      
    // {path:'/*',element: <NotFound/>},
  ])
  return routes;
}

function App() { 

  return (

    <ShopProvider>
        <BrowserRouter>
           <AppRoutes/>
        </BrowserRouter>      
    </ShopProvider>
  );
}
export default App;
