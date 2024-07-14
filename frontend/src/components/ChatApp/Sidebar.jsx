import React, {useState} from 'react'
import { IconButton } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircleRounded"
import PersonAddIcon from "@mui/icons-material/PersonAddAltRounded"
import GroupAddIcon from "@mui/icons-material/GroupAddRounded"
import AddCircleIcon from "@mui/icons-material/AddCircleRounded"
import NightlightIcon from "@mui/icons-material/NightlightRounded"
import SearchIcon from "@mui/icons-material/Search"
import ConversationItem from './ConversationItem';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [conversation, setConversation] = useState([
    {
      name: 'Test#1',
      lastMessage: 'LastMessage#1',
      timeStamp: 'today'
    },
    {
      name: 'Test#2',
      lastMessage: 'LastMessage#2',
      timeStamp: 'today'
    },
    {
      name: 'Test#3',
      lastMessage: 'LastMessage#3',
      timeStamp: 'today'
    },
  ]);
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col h-full'>
        <div className='bg-white border-r-2 pt-1 pb-1 pr-2 pl-2 rounded-xl m-2'>
        <div className='flex justify-between'>
          <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          </div>
          <div>
          <IconButton onClick={() => {navigate('users')}}>
            <PersonAddIcon />
          </IconButton >
          <IconButton onClick={() => {navigate('groups')}}>
            <GroupAddIcon />
          </IconButton>
          <IconButton onClick={() => {navigate('create-groups')}}>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
          </div>
        </div>
        </div >
            
        <div className='bg-white border-r-2 p-2 rounded-xl m-2 flex items-center'>
          <input 
            placeholder='Search'
            className='flex-grow rounded-xl p-2 border border-gray-300 '
          />
          <IconButton className='ml-2'>
            <SearchIcon />
          </IconButton>
        </div>

        <div className='bg-white border-r-2 pt-1 pb-2 pr-2 pl-2 rounded-xl m-2 flex-grow'>
          {conversation.map((conversation) => {
            return <ConversationItem props={conversation} key={conversation.name}  />
          })}
          
        </div>
      </div>
    </>
  )
}

export default Sidebar
