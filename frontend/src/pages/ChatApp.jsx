import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatArea from '../components/ChatApp/ChatArea';
import CreateGroups from '../components/ChatApp/CreateGroups';
import Groups from '../components/ChatApp/Groups';
import Login from '../components/ChatApp/Login';
import MainContainer from '../components/ChatApp/MainContainer';
import UserGroups from '../components/ChatApp/UserGroups';
import Welcome from '../components/ChatApp/Welcome';

const ChatApp = () => {
  return (
    <div className='bg-slate-300 min-h-screen flex justify-center items-center'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<ChatArea />} />
          <Route path="users" element={<UserGroups />} />
          <Route path="groups" element={<Groups />} />
          <Route path="create-groups" element={<CreateGroups />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ChatApp;
