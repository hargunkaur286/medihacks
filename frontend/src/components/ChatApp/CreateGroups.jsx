// import React from 'react';
// import { IconButton } from "@mui/material";
// import DoneOutlinedRoundedIcon from "@mui/icons-material/DoneAllOutlined";

// const CreateGroups = () => {
//   return (
//     <div className='flex flex-col h-full justify-center items-center'>
//       <div className='flex items-center bg-white rounded-xl p-4 w-full max-w-md'>
//         <input
//           placeholder='Enter Group Name'
//           className='flex-grow rounded-xl p-2 border border-gray-300 mr-2'
//         />
//         <IconButton>
//           <DoneOutlinedRoundedIcon />
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default CreateGroups;


import React, { useState } from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateGroups = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  const user = userData.data;
  const [groupName, setGroupName] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createGroup = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post(
      "http://localhost:8080/chat/createGroup",
      {
        name: groupName,
        users: '["647d94aea97e40a17278c7e5","647d999e4c3dd7ca9a2e6543"]',
      },
      config
    );
    nav("/chat/app/groups");
  };

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to create a Group Named " + groupName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This will create a create group in which you will be the admin and
              other will be able to join this group.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                createGroup();
                handleClose();
              }}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex items-center bg-white rounded-xl p-4 w-full max-w-md">
          <input
            placeholder="Enter Group Name"
            className="flex-grow rounded-xl p-2 border border-gray-300 mr-2"
            onChange={(e) => setGroupName(e.target.value)}
          />
          <IconButton onClick={handleClickOpen}>
            <DoneOutlineRoundedIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CreateGroups;
