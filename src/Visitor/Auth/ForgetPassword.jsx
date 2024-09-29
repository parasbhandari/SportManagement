import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';  // Import the icon here
import { useState } from 'react';

function ForgetPassword(props) {

  const [formData, setFormData] = useState({
    email: '',
  });
  const [error, setError] = useState(null);
  const navigate= useNavigate(); //Hook for navigation

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // try {
    //   const response = await axios.post('http://localhost:8000/api/login/ForgetPassword', formData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   if (response.status === 200) {
        // Handle successful authentication, e.g., store the token or redirect
        if(props.name=="Organizer"){
          navigate("/Organizer/OTPValidation")
        }else{
          navigate("/Team/OTPValidation")
        }
        // Redirect user to dashboard or other page if needed
        // window.location.href = '/dashboard';
  //     } else {
  //       // Handle errors returned by the backend (e.g., wrong credentials)
  //       setError(response.data.message || 'Authentication failed.');
  //     }
  //   } catch (error) {
  //     // Handle network or server errors
  //     console.error('Error during login:', error);
  //     setError(error.response?.data?.message || 'An error occurred. Please try again later.');
  //   }
  }

  return (
    <div>
      <div className='w-3/4  border-2 mx-auto mt-36 p-12 rounded-xl'>
        <div className='flex justify-around'>
          <div className='w-1/2'>
            <img src={props.im} alt="loginimage" className='w-full h-auto max-h-72 object-contain' />
            <h3 className='text-2xl text-center font-bold mt-3'>Login as {props.name}</h3>
          </div>
          <div className='flex items-center justify-center p-4 w-1/2'>
            <form onSubmit={handleSubmit} className="w-full">
              <div>
                <div className='mb-5 text-black text-xl'>
                  <label htmlFor='email' className='block text-white-700 ml-2 text-xl mb-3'>Enter your email or phone to validate</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='Email or Phone'
                    style={{
                      width: '100%',
                      padding: '13px',
                      boxSizing: 'border-box',
                      borderRadius: '20px'
                    }}
                  />
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <button
                  type="submit"
                  style={{
                    width: '80%',
                    padding: '10px 20px',
                    backgroundColor: 'purple',
                    color: 'white',
                    border: 'none',
                    borderRadius: '9999px',
                  }}
                >
                  Submit
                </button>
              </div>
              <div className='p-4 flex'>
                <Link to={`/${props.name}/Login`}>
                <span className='mr-2 scale-105'>
                <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                </Link>
                
                <p>Back to Login</p>
                
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword;
