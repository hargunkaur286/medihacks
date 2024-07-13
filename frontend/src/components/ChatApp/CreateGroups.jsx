import React from 'react';
import { IconButton } from "@mui/material";
import DoneOutlinedRoundedIcon from "@mui/icons-material/DoneAllOutlined";

const CreateGroups = () => {
  return (
    <div className='flex flex-col h-full justify-center items-center'>
      <div className='flex items-center bg-white rounded-xl p-4 w-full max-w-md'>
        <input
          placeholder='Enter Group Name'
          className='flex-grow rounded-xl p-2 border border-gray-300 mr-2'
        />
        <IconButton>
          <DoneOutlinedRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CreateGroups;
