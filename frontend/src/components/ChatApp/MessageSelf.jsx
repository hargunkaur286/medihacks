import React from 'react';

const MessageSelf = () => {
  const props2 = { name: "You", message: "This is a Sample!" };
  return (
    <div className='flex justify-end items-center m-2'>
      <div className='bg-white border pt-1 pb-2 pr-4 pl-4 rounded-xl inline-block max-w-xl'>
        <p className='text-[1rem]'>{props2.message}</p>
        <p className='text-[0.75rem] text-[rgba(0,0,0,0.54)] text-right'>12:00am</p>
      </div>
      <p className='flex justify-center items-center bg-[#d9d9d9] text-white font-bold text-2xl h-8 w-8 p-0.5 rounded-full ml-2'>
        {props2.name[0]}
      </p>
    </div>
  );
};

export default MessageSelf;
