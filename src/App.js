import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireRoute from './Pages/Login/RequireRoute/RequireRoute';
import Inventory from './Pages/Inventory/Inventory/Inventory';
import AddProduct from './Pages/AddProduct/AddProduct';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/inventory' element={
          <RequireRoute>
            <Inventory></Inventory>
          </RequireRoute>
        }></Route>
        <Route path='/addProduct' element={
          <RequireRoute>
            <AddProduct></AddProduct>
          </RequireRoute>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
