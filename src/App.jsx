
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LoginSignup from './components/LoginSignup'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Womenscollection from './components/WomensCollection';
import Footer from './components/Footer';
import CartProvider from './components/CartContex';
import Cart from './components/Cart';
import Menscollection from './components/MensCollection';
import PlaceOrder from './components/PlaceOrder';


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />


          <Routes>
            <Route path="/" element={<Hero />} />


            <Route path="/login" element={<LoginSignup />} />
            <Route path="/women" element={<Womenscollection />} />
            <Route path="/men" element={<Menscollection />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<PlaceOrder />} />

          </Routes>

        </BrowserRouter>

        <Footer />
      </CartProvider>
    </>
  )
}

export default App;
