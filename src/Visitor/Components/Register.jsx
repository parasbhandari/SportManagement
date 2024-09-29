import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // import eye icons

function Register(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  // Handler to toggle checkbox state
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
        console.log('Registration successful:', response.data);
        // Redirect user to dashboard or other page if needed
        // window.location.href = '/dashboard';
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
          <div className='w-1/2 flex flex-col justify-center items-center'>
            <img src={props.im} alt="loginimage" className='w-full h-auto max-h-72 object-contain' />
            <h3 className='text-2xl text-center font-bold mt-3'>You will further get to add your other detail after you begin</h3>
          </div>
          <div className='flex items-center justify-center p-4 w-1/2'>
            <form onSubmit={handleSubmit} className="w-full">
              <div>
                <label htmlFor='name' className='block text-white-700 ml-2 text-xl mb-2'>{props.name} Name</label>
                <div className='mb-8 text-black text-xl'>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={`${props.name} Name `}
                    style={{
                      width: '100%',
                      padding: '13px',
                      boxSizing: 'border-box',
                      borderRadius: '20px'
                    }}
                  />
                </div>
                <label htmlFor='email' className='block text-white-700 ml-2 text-xl mb-2'>Email</label>
                <div className='mb-8 text-black text-xl'>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your Email"
                    style={{
                      width: '100%',
                      padding: '13px',
                      boxSizing: 'border-box',
                      borderRadius: '20px'
                    }}
                  />
                </div>
                
              
                <label htmlFor='phone' className='block text-white-700 ml-2 text-xl mb-2'>Phone</label>
                <div className='mb-8 text-black text-xl'>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter Phone"
                    style={{
                      width: '100%',
                      padding: '13px',
                      boxSizing: 'border-box',
                      borderRadius: '20px'
                    }}
                  />
                </div>
                <label htmlFor='password' className='block text-white-700 ml-2 text-xl mb-2'>Password</label>
                <div className='mb-3 text-black relative text-xl'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder='Password'
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
                <div>
                <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="m-2 mb-5 scale-150"
        />
        I agree to accept the Terms and Condition of a {props.name}
      </label>
                </div>
                
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
                  Register
                </button>
              

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
