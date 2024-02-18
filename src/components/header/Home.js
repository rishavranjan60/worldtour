import React from 'react'
import './home.css';
import '../../App.css';
import About from './About';
import Portfolio from './Portfolio';
import Service from './Service';
import Contact from './Contact';

import { NavLink } from 'react-router-dom';
const Home = ()=> {
  return (
    <div>
      
       
      <section id='home'>
        
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 fw-bolder mb-4 text-center'>Feels the fresh Business Perspective</h1>

                        <div className='graphics'>
                          <div className='animations'>
                          <p className='text-center'>❤</p>
                          </div>
                          
                        </div>

                        <p className='lead text-center fs-4 mb-5 '>We and our partners Provide the information related to Tourist Desination. 
                          We can manage the different kind of facilities to our costumer as they contact us through this website.
                          We also provide the tourist guide as who want to explore the world through our Travel Agency.
                          </p>
                        <div className='navlinks d-flex justify-content-center'>
                            <NavLink to="/contact" className='btn btn-light me-4 px-4 py-2'>Get Quotes</NavLink>
                            <NavLink to="/services" className='btn btn-outline-light  px-4 py-2'>Our Service</NavLink>                       
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
        <About />
        <Portfolio />
        <Contact />
        <Service />
      </div>
      
    
  )
}

export default Home;
