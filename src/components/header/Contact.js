import React, { useState } from 'react'
import './contact.css'
import { FaMobile, FaEnvelope } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = ()=> {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/contact', {name, email, message})
    .then(result => {console.log(result)
    navigate('/contact') })
  }





  return (
    <div> 
      
      <section className='contact'>
        <div className='container cont'>
          <div className='row'>
            <div className='col-md-12'>
            <h3 className='page-heading'>CONTACT US</h3>
            <hr className='w-25 mx-auto' />
            <br />
            <p className='page-info'>You can contact us for more details about our Application.</p>
            <hr/>
            </div>
          </div>

          <div className='row'>
          <div className='content'>
            <div className='left-side'>
              <div className='address details'>
                <p> <CiLocationOn className='address' /> </p>
                <div className='topic'>Address</div>
                <div className='text-one'>28719 Steindamm</div>
                <div className='text-two'>Bremen Germany</div>
              </div>
              <div className='phone details'>
                <p> <FaMobile className='mobile' /> </p>
                <div className='topic'>Phone</div>
                <div className='text-one'>+4917641451568</div>
                <div className='text-two'>+919319479660</div>
              </div>
              <div className='email details'>
                <p> <FaMobile className='mobile' /> </p>
                <div className='topic'>Email</div>
                <div className='text-one'>rishavranjan774@gmail.com</div>
                <div className='text-two'>Info@ranjan.com</div>
              </div>
  
            </div>
            <div className='right-side'>
              <div className='topic-text'>Send us a message</div>
              <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
              <form onSubmit={handleSubmit} >
                <div className='input-box'>
                  <input type="text" placeholder='Input Your Name Here..' autoComplete='off' name='name' className='form-control'
                  onChange={(e) => setName(e.target.value) } />
                </div>
                <div className='input-box'>
                  <input type="email" placeholder='Enter Your Email' autoComplete='off' name='email' className='form-control'
                  onChange={(e) =>setEmail(e.target.value) } />
                </div>
                <div className='input-box message-box'>
                  <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Message Here' autoComplete='off'
                  onChange={(e) => setMessage(e.target.value) } ></textarea>
                </div>
                <div className='button'>
                  <input type="submit" className='button' value="Send Now" />
                </div>
              </form>
            </div>
            </div>
          </div>
          
        </div>
      </section>
      
    </div>
  )
}

export default Contact;
