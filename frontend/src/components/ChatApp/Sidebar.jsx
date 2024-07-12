import React, {useState} from 'react'
import { IconButton } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircleRounded"
import PersonAddIcon from "@mui/icons-material/PersonAddAltRounded"
import GroupAddIcon from "@mui/icons-material/GroupAddRounded"
import AddCircleIcon from "@mui/icons-material/AddCircleRounded"
import NightlightIcon from "@mui/icons-material/NightlightRounded"
import SearchIcon from "@mui/icons-material/Search"
import ConversationItem from './ConversationItem';

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
  ])
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
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
          </div>
        </div>
        </div >
            
        <div className='bg-white border-r-2 pt-1 pb-1 pr-2 pl-2 rounded-xl m-2 flex justify-around'>
          <input placeholder='search'/>
          <IconButton>
          <SearchIcon />
          </IconButton>
        </div>

        <div className='bg-white border-r-2 pt-1 pb-2 pr-2 pl-2 rounded-xl m-2 flex-grow'>
          {conversation.map((conversation) => {
            return <ConversationItem props={conversation} />
          })}
          
        </div>
      </div>
    </>
  )
}

export default Sidebar
