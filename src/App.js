import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Card from './Card';
import Data from './Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import { useState } from 'react';

function App() {

            const[cartData, setCartData] = useState([])

            const handleCartData = (product) => {
              console.log(product)
              setCartData((cartData)=>[...cartData,{data:product, quantity: 1}])
            }
  
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Carousel />
        
      <Routes>
        <Route exact path="/" element={<Card Data={Data} handleCartData={handleCartData} />} />
          <Route exact path="/Cart" element={<Cart data={cartData}/>} />
      </Routes>
     
      </Router>
     
   
    
    </div>
  );
}

export default App;
