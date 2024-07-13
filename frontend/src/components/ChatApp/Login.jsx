import React from 'react';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-slate-200 h-[90vh] w-[90vw] flex rounded-xl mt-10">
      <div className='bg-white border-r-2 p-4 rounded-xl m-2 w-[30%] flex justify-center items-center'>
        <div className="w-full flex justify-center items-center">
          <img src={logo} alt="Logo" className='max-w-full h-auto' />
        </div>
      </div>

      <div className='bg-white border-r-2 p-4 rounded-xl m-2 w-[70%] flex flex-col justify-center items-center'>
      <div className="w-full flex flex-col items-center mb-4">
          <h1 className='text-4xl font-bold  mb-6'>Login to your Account</h1>
        </div>
        <div className='w-full'>
          <input
            placeholder='Enter Username'
            className='w-full rounded-xl p-2 mb-4 border border-gray-300'
          />
        </div>
        <div className='w-full'>
          <input
            placeholder='Enter your Password'
            className='w-full rounded-xl p-2 mb-4 border border-gray-300'
          />
        </div>
        <Link to="/login" className='w-full'>
          <button className="bg-primaryColor w-full py-2 text-white font-semibold h-[44px] flex items-center justify-center rounded-xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
