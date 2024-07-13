import React from 'react'
import Login from '../components/ChatApp/Login'
import MainContainer from '../components/ChatApp/MainContainer'

const ChatApp = () => {
    return (
        <div className='bg-slate-300 min-h-screen flex justify-center align-center'>
            <MainContainer />
            {/* <Login/> */}
        </div>
    )
}

export default ChatApp
