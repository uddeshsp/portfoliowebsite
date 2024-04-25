import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./element/Header";
import Footer from "./element/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";
import Works from "./components/Works";
import Details from "./components/Details";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App(){
  useEffect(()=>{
    AOS.init({
          duration: 1500,
          once: true,
      })
  },[]);

  return(

    
    
      
    <main className="main-homepage">
      
      <Header/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Works" element={<Works/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Details" element={<Details/>}/>
        
      </Routes>
      
      <Footer/>
    </main>
    
  );
}

export default App;