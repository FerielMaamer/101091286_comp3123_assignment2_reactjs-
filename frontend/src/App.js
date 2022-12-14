import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from './Employees';
import Add from './CRUD pages/Add';
import Update from './CRUD pages/Update';
import View from './CRUD pages/View';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import NavBar from './NavBar';

function App() {

  const handleLogout=()=>{
    localStorage.clear();
    window.location.reload();
    window.location.replace('/');
  } 

  return (
    <div>
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact/>
        <Route path="/register" element={<Register />} exact/>
        <Route path="/employees" element={<Employees handleLogout={handleLogout}/>}/>
        <Route path="/add" element={<Add handleLogout={handleLogout}/>}/>
        <Route path="/update/:id" element={<Update handleLogout={handleLogout}/>} />
        <Route path="/view/:id" element={<View handleLogout={handleLogout}/>} />       
      </Routes>
      
    </BrowserRouter> 
    </div>
  );
}

export default App;
