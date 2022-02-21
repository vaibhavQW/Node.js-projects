import React, { Component } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import MainPage from './Component/body/MainPage';
import Contact from './Component/body/Contact';
import Footer from './Component/Footer/Footer';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
        <Routes>
               <Route path="/" element={<MainPage/>}/>
               <Route path="/contact" element={<Contact/>} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    )
  }
}
