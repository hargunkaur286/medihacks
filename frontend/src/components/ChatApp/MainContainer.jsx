import React from 'react'
import ChatArea from './ChatArea'
import CreateGroups from './CreateGroups';
import Sidebar from './Sidebar'
import Welcome from './Welcome';

const MainContainer = () => {
  const chatAreaProps = {
    name: 'John Doe',
    timeStamp: 'today'
  };
  return (
    <div className="bg-slate-200 h-[90vh] w-[90vw] flex min-h-full rounded-xl mt-10">
      <div className="w-[30%] h-full">
        <Sidebar />
      </div>
      <div className="w-[70%] h-full">
        {/* <ChatArea props={chatAreaProps} /> */}
        {/* <Welcome /> */}
        <CreateGroups/>
      </div>
    </div>
  )
}

export default MainContainer
