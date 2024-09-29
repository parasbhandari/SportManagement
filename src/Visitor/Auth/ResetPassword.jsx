import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the back arrow icon
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons for password visibility
import axios from 'axios'; // Import axios for API calls

function ResetPassword(props) {
  const [formData, setFormData] = useState({ email: '', newPassword: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false); // State to toggle new password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const navigate = useNavigate(); // For navigation after successful password reset

  // Handle input changes
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    // Validation check
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Make a request to the backend API to reset the password
      const response = await axios.post('https://your-backend-api.com/reset-password', {
        email: formData.email,
        newPassword: formData.newPassword,
      });

      // Check response from backend
      if (response.status === 200) {
        setSuccessMessage('Password has been successfully reset.');
        setError('');
        
        // Navigate to the login page after a successful password reset
        setTimeout(() => {
          navigate(`/${props.name}/Login`);
        }, 2000);
      } else {
        setError('Failed to reset password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while resetting your password. Please try again.');
    }
  }

  return (
    <div>
      <div className='w-3/4 border-2 mx-auto mt-36 p-12 rounded-xl'>
        <div className='flex justify-around'>
          <div className='w-1/2'>
            <img src={props.im} alt="loginimage" className='w-full h-auto max-h-72 object-contain' />
            <h3 className='text-2xl text-center font-bold mt-3'>Login as {props.name}</h3>
          </div>
          <div className='flex items-center justify-center p-4 w-1/2'>
            <form onSubmit={handleSubmit} className="w-full">
              <div>
                <div className='mb-5 text-black text-xl'>
                  <label htmlFor='email' className='block text-white-700 ml-2 text-xl mb-3'>
                    Reset Your Password
                  </label>
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
                      borderRadius: '20px',
                    }}
                  />
                </div>
                
                {/* New Password Input with Eye Icon */}
                <div className='mb-5 text-black text-xl relative'>
                  <input
                    id="newPassword"
                    type={showNewPassword ? 'text' : 'password'} // Toggle between text and password type
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                    placeholder='New Password'
                    style={{
                      width: '100%',
                      padding: '13px',
                      boxSizing: 'border-box',
                      borderRadius: '20px',
                    }}
                  />
                  <span 
                    onClick={() => setShowNewPassword(!showNewPassword)} 
                    className="absolute right-3 top-4 cursor-pointer -scale-110"
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                
                {/* Confirm Password Input with Eye Icon */}
                <div className='mb-5 text-black text-xl relative'>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'} // Toggle between text and password type
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder='Confirm New Password'
                    style={{
                      width: '100%',
                      padding: '13px',
                      boxSizing: 'border-box',
                      borderRadius: '20px',
                    }}
                  />
                  <span 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    className="absolute right-3 top-4 cursor-pointer -scale-110"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                
                {error && <p className='text-red-500'>{error}</p>}
                {successMessage && <p className='text-green-500'>{successMessage}</p>}
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
                  Reset
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
  );
}

export default ResetPassword;
