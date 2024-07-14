import React, { useState, createContext } from 'react';
import ChatArea from './ChatArea';
import CreateGroups from './CreateGroups';
import Sidebar from './Sidebar';
import UserGroups from './UserGroups';
import Welcome from './Welcome';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// Create and export the context
export const myContext = createContext();

const MainContainer = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="bg-slate-200 h-[90vh] w-[90vw] flex min-h-full rounded-xl mt-10">
      <myContext.Provider value={{ refresh, setRefresh }}>
        <div className="w-[30%] h-full">
          <Sidebar />
        </div>
        <div className="w-[70%] h-full">
          <Outlet />
        </div>
      </myContext.Provider>
    </div>
  );
};

export default MainContainer;
