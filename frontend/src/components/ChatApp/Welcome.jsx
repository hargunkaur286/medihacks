import React from 'react';
import logo from "../../assets/images/logo.png";

const Welcome = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex flex-col justify-center items-center gap-2 rounded-xl border-b-2 bg-white flex-grow m-2'>
        <img src={logo} alt="Logo" className='max-w-full h-auto' />
        <p className='text-gray-700 text-center'>View and text directly to people present in the chat</p>
      </div>
    </div>
  );
};

export default Welcome;
