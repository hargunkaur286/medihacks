import React from 'react'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'

const MainContainer = () => {
  return (
    <div className="bg-slate-200 h-[90vh] w-[90vw] flex min-h-full rounded-xl mt-10">
      <div className="w-[30%] h-full">
        <Sidebar />
      </div>
      <div className="w-[70%] h-full">
        <WorkArea />
      </div>
    </div>
  )
}

export default MainContainer
