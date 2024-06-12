import './App.css'
import Navbar from "./components/navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProductDetail from "./components/productDetail/ProductDetail";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddressPage from "./components/addressPage/AddressPage";
import { useSelector } from "react-redux";

import SingleProducts from './components/SingleProducts/SingleProducts';
import CatergoryPage from './components/CategoryPage/CatergoryPage'
function App() {
   const {user} = useSelector((state) => state.auth)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/category/:catergory' element={user ? <CatergoryPage /> : <Login />} />
        <Route path='/products/:id' element={user ? <SingleProducts /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
      
        <Route path='/addressDetails' element={user ? <AddressPage /> : <Login />}/>
        <Route path='/productDetail/:id' element={user ? <ProductDetail /> : <Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
