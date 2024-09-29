import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function OTPValidation(props) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  function handleChange(e, index) {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if not the last one
      if (value !== "" && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus(); // Move focus back to the previous input on backspace
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    // Add OTP validation logic here
    navigate(`/${props.name}/ResetPassword`);
    
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
              <h3 className='text-xl font-bold mb-4'>OTP Validation</h3>
              <div className='flex justify-start space-x-2 mb-8'>
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={el => inputRefs.current[index] = el}
                    className='w-16 h-16 text-center border-2 rounded-md focus:outline-none focus:border-blue-500 text-xl text-black'
                  />
                ))}
              </div>
              <button
                type="submit"
                className='bg-purple-600 text-white w-1/2 p-2 rounded-full hover:bg-purple-700 transition-colors text-xl'
              >
                Submit OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPValidation;
