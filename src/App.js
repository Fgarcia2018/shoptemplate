import { HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import {Reserve} from './Pages/Reserve';
import { ShopProvider } from './Context';
import { NotFound } from './Pages/NotFound';

function App() { 

  return (

    <ShopProvider>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Home' element={<Home />}/>
            <Route path='/Reserva' element={<Reserve />}/>       
            <Route path='*' element={<NotFound />}/>            
          </Routes>
        </HashRouter>      
    </ShopProvider>
  );
}
export default App;
