import React from 'react';

const MessageOthers = () => {
  const props1 = { name: "RandomUser", message: "This is a Sample!" };
  return (
    <div className='flex items-center m-2'>
      <p className='flex justify-center items-center bg-[#d9d9d9] text-white font-bold text-2xl h-8 w-8 p-0.5 rounded-full mr-2'>
        {props1.name[0]}
      </p>
      <div className='bg-white border pt-1 pb-2 pr-4 pl-4 rounded-xl inline-block max-w-xl'>
        <p className='col-start-2 col-span-2 row-start-1 font-bold text-gray-700'>{props1.name}</p>
        <p className='text-[1rem]'>{props1.message}</p>
        <p className='text-[0.75rem] text-[rgba(0,0,0,0.54)] text-right'>12:00am</p>
      </div>
    </div>
  );
};

export default MessageOthers;
