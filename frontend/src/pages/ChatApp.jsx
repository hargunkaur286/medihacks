import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatArea from '../components/ChatApp/ChatArea';
import CreateGroups from '../components/ChatApp/CreateGroups';
import Groups from '../components/ChatApp/Groups';
import Login from '../components/ChatApp/Login';
import MainContainer from '../components/ChatApp/MainContainer';
import Signup from '../components/ChatApp/Signup';
import UserGroups from '../components/ChatApp/UserGroups';
import Welcome from '../components/ChatApp/Welcome';
import { useDispatch, useSelector } from "react-redux";


const ChatApp = () => {
  const dispatch = useDispatch();
  return (
    <div className='bg-slate-300 min-h-screen flex justify-center items-center'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat/:_id" element={<ChatArea />}></Route>
          <Route path="users" element={<UserGroups />} />
          <Route path="groups" element={<Groups />} />
          <Route path="create-groups" element={<CreateGroups />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ChatApp;
