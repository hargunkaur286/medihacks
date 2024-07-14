import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'
import { useState } from 'react'

const ChatArea = () => {
    const [conversations, setConversations] = useState([
        {
            name: 'John Doe',
            lastMessage: "message",
            timeStamp: 'today'
        }
    ]);
      var props = conversations[0];
    return (
        <div className='flex flex-col h-full'>

            {/* message header */}
            <div className="flex align-center gap-1 bg-white pt-2 pb-2 m-2 rounded-xl">
                <p className='flex justify-center items-center bg-[#d9d9d9] text-white font-bold text-2xl h-8 w-8 p-0.5 rounded-full self-center m-2'>{props.name[0]}</p>
                <div className="flex-col justify-center flex-grow">
                    <p className='col-start-2 col-span-2 row-start-1 font-bold text-gray-700'>{props.name}</p>
                    <p className='self-end text-[0.75rem] text-[rgba(0,0,0,0.54)]'>{props.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
            {/* message box */}
            <div className="flex-grow overflow-y-auto">
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
            </div>

            {/* text input */}
            <div className='flex items-center m-2 text-xl rounded-xl bg-white px-4 py-2'>
                <input
                    placeholder='Type a Message'
                    className='flex-grow rounded-xl px-2 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:primaryColor'
                />
                <IconButton className='ml-2'>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea
