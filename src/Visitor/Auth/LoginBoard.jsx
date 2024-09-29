import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // import eye icons
import { Link, useNavigate } from 'react-router-dom';

function LoginBoard(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Handle successful authentication, e.g., store the token or redirect
        console.log('Login successful:', response.data);

        // Redirect based on props.name
        if (props.name === "Organizer") {
          navigate('/organizer');
        } else {
          navigate('/team');
        }
      } else {
        // Handle errors returned by the backend (e.g., wrong credentials)
        setError(response.data.message || 'Authentication failed.');
      }
    } catch (error) {
      // Handle network or server errors
      console.error('Error during login:', error);
      setError(error.response?.data?.message || 'An error occurred. Please try again later.');
    }
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
                <div className='mb-8 text-black text-xl'>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='username or email'
                    style={{
                      width: '100%',
                      padding: '13px',
                      boxSizing: 'border-box',
                      borderRadius: '20px'
                    }}
                  />
                </div>
                <div className='mb-3 text-black relative text-xl'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder='password'
                    style={{
                      width: '100%',
                      padding: '13px',
                      boxSizing: 'border-box',
                      borderRadius: '20px'
                    }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      color: 'black',   // Set the icon color to black
                      fontSize: '24px', // Increase the icon size
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <Link to={`/${props.name}/ForgotPassword`}>
                  <p className='underline mb-3'>Forgot Password? Click to reset.</p>
                </Link>
                
                {error && <p className='text-red-500'>{error}</p>}
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '10px 20px',
                    backgroundColor: 'purple',
                    color: 'white',
                    border: 'none',
                    borderRadius: '9999px',
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBoard;
