import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer className='footer text-white bg-primary'>
        <div className='container'>
            <div className='py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <h4>WORLD TOUR</h4>
                    </div>
                    <div className='col-2'>
                        <h5>Section</h5>
                            <ul className='nav flex-column '>
                            <li className='nav-item mb-2'><Link to="/" className=' link text-decoration-none'>Home</Link></li>
                            <li className='nav-item mb-2'><Link to="/" className=' link text-decoration-none'>Features</Link></li>
                            <li className='nav-item mb-2'><Link to="/" className=' link text-decoration-none'>Pricing</Link></li>
                            <li className='nav-item mb-2'><Link to="/" className=' link text-decoration-none'>FAQs</Link></li>
                            <li className='nav-item mb-2'><Link to="/" className=' link text-decoration-none'>About</Link></li>
                        
                        </ul>
                    </div>
                    <div className='col-4 offset-1'>
                        <form>
                            <h5>Subscribe to our NewsLetter</h5>
                            <p>Monthly digest of whats new and exciting from us </p>
                            <div className='d-flex w-100 gap-2'>
                                <label htmlFor="newsletter1" className='visually-hidden'>Email Address</label>
                                <input type="text" id='newsletter' className='form-control' placeholder='email address' />
                                <button className='btn btn-outline-primary px-4' type='button'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>


            <div className='d-flex justify-content-between pt-4 mt-4 border-top'>
                <p>@ 2023 Company, Inc All rights reserved.</p>
                <ul className='list-unstyled d-flex'>
                    <li className='ms-3'>
                        <a href="#" className='link-light' to="#">
                            <i className='fa fa-facebook fa-2x'></i>
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="#" className='link-light' to="#">
                            <i className='fa fa-instagram fa-2x'></i>
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="#" className='link-light' to="#">
                            <i className='fa fa-twitter fa-2x'></i>
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="#" className='link-light' to="#">
                            <i className='fa fa-facebook fa-2x'></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        </div>
        </footer>
      
    </div>
  )
}

export default Footer;
