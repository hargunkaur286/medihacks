import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const Groups = () => {
  const testUsers = [
    'Test Group 1',
    'Test Group 2',
    'Test Group 3',
    'Test Group 4',
    'Test Group 5',
    'Test Group 6',
    'Test Group 7',
    'Test Group 8',
    'Test Group 9',
    'Test Group 10',
    'Test Group 11',
  ];

  return (
    <div className='flex flex-col h-full'>
      {/* Online Users Header */}
      <div className='flex items-center gap-2 rounded-xl border-b-2 bg-white m-2 p-4'>
        <span className='font-bold text-lg'>Available Groups</span>
      </div>

      {/* Search Bar */}
      <div className='flex items-center gap-2 rounded-xl border-b-2 bg-white m-2 p-4'>
        <input
          placeholder='Search'
          className='flex-grow rounded-xl p-2 border border-gray-300'
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>

      {/* Scrollable Test Users */}
      <div className='flex flex-col gap-2 rounded-xl bg-white m-2 p-4 flex-grow overflow-y-auto'>
        {testUsers.map((user, index) => (
          <div key={index} className='flex items-center gap-2 p-2 border-b'>
            <div className='h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold'>
              T
            </div>
            <span className='font-semibold'>{user}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
