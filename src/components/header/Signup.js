import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';


const Signup = ()=> {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name, email, password})
    .then(result => {console.log(result)
    navigate('/signin')
    })
    .catch(err=> console.log(err))
  }

  return (
    <div>
      <div className='full-page'>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='card p-3 rounded'>
          <h2>register</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="email">
                <strong>Name</strong>
              </label>
              <input type="text" placeholder='enter Name' autoComplete='off' name='name' className='form-control rounded-0' 
              onChange={(e) => setName(e.target.value)} />
            </div>
            
            <div className='mb-3'>
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input type="email" placeholder='Enter email' autoComplete='off' name='email' className='form-control rounded-0' 
              onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='mb-3'>
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}  />
            </div>

            <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
          </form>

            <p>Already Have an Account</p>
            <p>
            <Link to="/signin" className='signin btn btn-default border w-100 rounded-0 text-decoration-none'>Signin</Link>
            </p>

         
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup;
