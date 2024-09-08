import React from 'react';
import Navbar from './components/header/Navbar';
import Home from './components/header/Home';
import About from './components/header/About';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Service from './components/header/Service';
import Contact from './components/header/Contact';
import Portfolio from './components/header/Portfolio';
import Signin from './components/header/Signin';
import Signup from './components/header/Signup';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
           <Route exact path='/' Component={Home} />
           <Route exact path='about' Component={About} />
           <Route exact path='services' Component={Service} />
           <Route exact path='contact' Component={Contact} />
           <Route exact path='portfolio' Component={Portfolio} />
           <Route exact path='signin' Component={Signin} />
           <Route exact path='signup' Component={Signup} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
