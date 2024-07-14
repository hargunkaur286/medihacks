import React from "react";

const MessageOthers = ({ props }) => {
  return (
    <div className="flex items-center m-2">
      <p className="flex justify-center items-center bg-[#d9d9d9] text-white font-bold text-2xl h-8 w-8 p-0.5 rounded-full mr-2">
        {props.sender.name[0]}
      </p>
      <div className="bg-white border pt-1 pb-2 pr-4 pl-4 rounded-xl inline-block max-w-xl">
        <p className="font-bold text-gray-700">{props.sender.name}</p>
        <p className="text-[1rem]">{props.content}</p>
      </div>
    </div>
  );
};

export default MessageOthers;
