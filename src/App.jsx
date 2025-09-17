import React from 'react';
import './index.scss';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Collections from './components/Collections';
import CreateBook from './components/CreateBook';
import BookPage from './components/BookPage';

function App() {

  return (
    <>
       <Routes>
        <Route path="/login" element={<Login/>}/>  
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Collections" element={<Collections/>}/>
        <Route path="/CreateBook" element={<CreateBook/>}/>
         <Route path="/BookPage" element={<BookPage/>}/>
      </Routes>
    </>
  )
}

export default App;
