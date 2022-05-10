import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Book from './component/Book/Book';
import Training from './component/training/Training';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <App />}/>
    <Route path='/bookappointment' element={<Book/>}/>
    <Route path='/bookappointment' element={<Training/>}/>
  </Routes>
   
  </BrowserRouter>
);

