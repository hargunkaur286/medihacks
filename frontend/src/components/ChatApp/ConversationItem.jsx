import React from 'react'

const ConversationItem = ({ props }) => {
    return (
        <div className='bg-white border-r-2 pt-1 pb-2 pr-2 pl-2 rounded-xl m-2 flex-grow'>
            <p className="flex justify-center items-center bg-[#d9d9d9] text-white font-bold text-2xl h-8 w-8 p-0.5 rounded-full self-center">{props.name[0]}</p>
            <p className="col-start-2 col-span-2 row-start-1 font-bold text-gray-700">{props.name}</p>
            <p className="con-lastMessage text-[0.75rem]">{props.lastMessage}</p>
            <p className="con-timeStamp self-end text-[0.75rem] text-[rgba(0,0,0,0.54)]">{props.timeStamp}</p>
        </div>
    )
}

export default ConversationItem
