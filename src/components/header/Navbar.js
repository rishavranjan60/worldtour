import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ()=> {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
   <div>
    <nav className="main-nav">
      <div className="logo">
      <h3 className="NavLogo"> <Link to="/" className="logo-link">WorldTour</Link> </h3>
      </div>

      <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
        <ul className="navbar-header-name">
          <li className="nav-item"> <NavLink to="/" className="nav-links">Home</NavLink> </li>
          <li className="nav-item"> <NavLink to="/about" className="nav-links">About</NavLink> </li>
          <li className="nav-item"> <NavLink to="/services" className="nav-links"> Services </NavLink> </li>
          <li className="nav-item"> <NavLink to="/contact" className="nav-links">Contact</NavLink> </li>
          <li className="nav-item"> <NavLink to="/portfolio" className="nav-links">Portfolio</NavLink> </li>
          <li className="NavButton nav-items"> <NavLink to="/signin" className="nav-links">Signin</NavLink> </li>
        </ul>
      </div>

      <div className="social-media">
        <ul className="social-media-desktop">
          <li href="#" target="rishav"><a href="https://www.facebook.com/"> <FaFacebookSquare className="facebook" /> </a> </li>
          <li href="#" target="rishav"><a href="https://www.instagram.com/">  <FaInstagramSquare className="instagram" /> </a></li>
          <li href="" target="rishav"> <a href="https://www.youtube.com/"> <FaYoutubeSquare className="youtube" /> </a></li>
        </ul>

        
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)} >
            <GiHamburgerMenu />
          </a>
        </div>

      </div>
    </nav>

   </div>
  )
}

export default Navbar;