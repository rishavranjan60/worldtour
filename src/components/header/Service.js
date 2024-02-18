import React from 'react'
import { NavLink } from 'react-router-dom';

import './service.css';
import nepal5 from '../images/nepal5.jpeg';
import rome1 from '../images/rome1.jpeg';
import tajmahal from '../images/tajmahal.jpeg';
import Kolkata from '../images/KOLKATA.jpg';
import Dubai from '../images/DUBAI.jpg';
import Pamukalle from '../images/PAMUKALLE.jpg';
import London from '../images/LONDON.jpg';
import Phuket from '../images/PHUKET.jpg';
import Nepal2 from '../images/nepal2.jpeg';





const Service = ()=> {
  return (
    <div>
      <section className='service overflow-hidden'>
      <h3 className='page-heading'>OUR SERVICES</h3>
      <hr className='w-25 mx-auto' />
      <p className='page-info'>We are ready to provide different destination details.</p>
      <div className='row'>





      <div className='col-md-4'>
          <div className='card'>
            <img src={rome1} alt="rome" />
            <div className='card-body'>
              <h4 className='card-title'>Rome</h4>
              <p className='card-text'>Tourist Attraction Place of Italy</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>

            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <img src={tajmahal} alt="nepal" />
            <div className='card-body'>
              <h4 className='card-title'>Taj Mahal</h4>
              <p className='card-text'>Tourist Attraction Place of India</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>
              
            </div>
          </div>
        </div>
        

        <div className='col-md-4'>
          <div className='card'>
            <img src={nepal5} alt="nepal" />
            <div className='card-body'>
              <h4 className='card-title'>Syawambhunath Temple</h4>
              <p className='card-text'>Tourist Attraction Place of Nepal</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <img src={Kolkata} alt="kolkata" />
            <div className='card-body'>
              <h4 className='card-title'>KOLKATA</h4>
              <p className='card-text'>Tourist Attraction Place of India</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <img src={Dubai} alt="" />
            <div className='card-body'>
              <h4 className='card-title'>DUBAI</h4>
              <p className='card-text'>Tourist Attraction Place of UAE</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <img src={Pamukalle} alt="" />
            <div className='card-body'>
              <h4 className='card-title'>PAMUKALLE</h4>
              <p className='card-text'>Tourist Attraction Place of Pamukalle</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <img src={Nepal2} alt="nepal" />
            <div className='card-body'>
              <h4 className='card-title'>Chitwan</h4>
              <p className='card-text'>Tourist Attraction Place of Nepal</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <img src={London} alt="nepal" />
            <div className='card-body'>
              <h4 className='card-title'>London</h4>
              <p className='card-text'>Tourist Attraction Place of England</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <img src={Phuket} alt="nepal" />
            <div className='card-body'>
              <h4 className='card-title'>Phuket</h4>
              <p className='card-text'>Tourist Attraction Place of North America</p>
              <NavLink to="/contact" className='btn btn-outline-light  px-4 py-2'>Contact for Details</NavLink>
            </div>
          </div>
        </div>

    
      </div>
      </section>
    </div>
  )
}

export default Service;
