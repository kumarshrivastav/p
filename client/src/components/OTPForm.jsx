import React, { useEffect, useRef } from 'react';
import {Button} from "flowbite-react";
import toast from 'react-hot-toast';
import Timer from './Timer';
import { verifyOtp } from '../http/http';
const OTPForm = ({email,visitorId,setOpenModal,setVerified}) => {
  const otpInputsRef = useRef([]);
  console.log(otpInputsRef)
  useEffect(() => {
    // Function to handle input event
    const handleInput = (index) => (e) => {
      if (e.target.value.length > 0 && index < otpInputsRef.current.length - 1) {
        otpInputsRef.current[index + 1].focus();
      }
    };

    // Function to handle keydown event
    const handleKeyDown = (index) => (e) => {
      if (e.key === 'Backspace' && index > 0 && e.target.value.length === 0) {
        otpInputsRef.current[index - 1].focus();
      }
    };

    // Attach event listeners to each OTP input
    otpInputsRef.current.forEach((input, index) => {
      if (input) {
        input.addEventListener('input', handleInput(index));
        input.addEventListener('keydown', handleKeyDown(index));
      }
    });

    // Cleanup event listeners on component unmount

    
    return () => {
      otpInputsRef.current.forEach((input, index) => {
        if (input) {
          input.removeEventListener('input', handleInput(index));
          input.removeEventListener('keydown', handleKeyDown(index));
        }
      });
    };
  }, []);

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(otpInputsRef.current)
    
    const otp = otpInputsRef.current.map(input => input.value).join('');
    if(otp.length<4){
    return toast.error('Enter 4-Digit OTP');
    }                    
    otpInputsRef.current.forEach((input,index)=>input.value='')
    try {
      const {data}=await verifyOtp(otp,email,visitorId)
      if(data.verified){
        setOpenModal(false)
        toast.success('You are verified 😃')
        setVerified(true)
        return;
      }
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className='w-full max-w-sm shadow-md rounded-lg p-4'>
      <h2 className='text-center text-xl font-serif font-semibold'>Enter OTP</h2>
      <p className='text-center text-sm text-gray-400 m-2'>Please enter 4-digit OTP within 2 minutes sent to your Email</p>
      <Timer/>
      <form onSubmit={handleSubmit} className=' justify-center m-4'>
        <div className='flex justify-around my-4 '>
        {[0,1,2,3].map((index)=>(
          <input  
            key={index}
            type="text"
            maxLength="1"
            className="w-12 h-12 text-cent
            er text-xl border rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            ref={el => otpInputsRef.current[index] = el}
          />
        ))}
        </div>
        <Button type='submit' className='rounded-none mx-auto font-serif font-semibold bg-customeButtonColor hover:!bg-white hover:!rounded-md hover:border-textColor hover:!border-2 hover:text-customeButtonColor'>Verify OTP</Button>
      </form>
    </div>
  );
};

export default OTPForm;