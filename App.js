import './App.css';
import Home from './Home';
import Cart from './Cart';
import LoginPage from './LoginPage';
import Vegetable from './Vegetable';
import Fruits from './Fruits';
import Admin from './admin/Admin';
import Registration from './Registration';
import ScheduleWeekPage from './ScheduleWeekPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import PaymentMethod from './PaymentMethod';
import ExoticVegetable from './ExoticVegetable';
function App() {

  useEffect(() => {
    //will only runs once when the app component loads
  }, [])
  return (
      <BrowserRouter>
      
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} /> 
        <Route path="/Loginpage" element={<LoginPage />} />
        <Route path="/Vegetable" element={<Vegetable />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/PaymentMethod" element={<PaymentMethod />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ScheduleWeekPage" element={<ScheduleWeekPage />} />
        <Route path="/ExoticVegetable" element={<ExoticVegetable />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
