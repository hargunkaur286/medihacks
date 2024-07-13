import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const UserGroups = () => {
  const testUsers = [
    'Test User 1',
    'Test User 2',
    'Test User 3',
    'Test User 4',
    'Test User 5',
    'Test User 6',
    'Test User 7',
  ];

  return (
    <div className='flex flex-col h-full'>
      {/* Online Users Header */}
      <div className='flex items-center gap-2 rounded-xl border-b-2 bg-white m-2 p-4'>
        <span className='font-bold text-lg'>Online Users</span>
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

export default UserGroups;
