import React from 'react'
import Contact from './Contact';
import './about.css';

const About = ()=> {
  return (
    <div>
      <section className='about'>
        
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-12 abt-1'>
                <h2>WE ARE WEB DEVELOPER</h2>
              </div>
              
            </div>
            
          </div>
          <div className='col-md-6 text-about'>
            <h2>ABOUT US</h2>
            <p>Our vision is a world where consumers demand a diversity of voices, 
              stories, and perspectives in news media and regard this as a 
              cornerstone of democracy and free expression. 
              We’re making progress — and hope you’ll join our growing community.</p>

              <a href="#" className='btn'>Learn more... </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
