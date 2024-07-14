import React from "react";

const MessageSelf = ({ props }) => {
  return (
    <div className="flex justify-end items-center m-2">
      <div className="bg-blue-100 border pt-1 pb-2 pr-4 pl-4 rounded-xl inline-block max-w-xl">
        <p className="text-[1rem] text-black">{props.content}</p>
      </div>
      <p className="flex justify-center items-center bg-[#d9d9d9] text-white font-bold text-2xl h-8 w-8 p-0.5 rounded-full ml-2">
        Y
      </p>
    </div>
  );
};

export default MessageSelf;
