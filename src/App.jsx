
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
import Success from './components/Success';
import KidsCollections from './components/KidsCollections';
import ExclusiveOffers from './components/ExclusiveOffers';


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
            <Route path="/kids" element={<KidsCollections />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<PlaceOrder />} />
            <Route path="/success" element={<Success />} />
            <Route path="/offers" element={<ExclusiveOffers />} />
            

          </Routes>
        

        </BrowserRouter>

        <Footer />
      </CartProvider>
    </>
  )
}

export default App;
