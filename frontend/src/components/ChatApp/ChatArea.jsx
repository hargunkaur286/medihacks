import React, { useContext, useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { myContext } from "./MainContainer";

const ChatArea = () => {
  const [messageContent, setMessageContent] = useState("");
  const messagesEndRef = useRef(null);
  const dyParams = useParams();
  const [chat_id, chat_user] = dyParams._id.split("&");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [allMessages, setAllMessages] = useState([]);
  const { refresh, setRefresh } = useContext(myContext);
  const [loaded, setLoaded] = useState(false);

  const sendMessage = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .post(
        "https://medihacks-five.vercel.app/message/",
        {
          content: messageContent,
          chatId: chat_id,
        },
        config
      )
      .then(() => {
        setRefresh(!refresh);
        setMessageContent("");
      });
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .get(`https://medihacks-five.vercel.app/message/${chat_id}`, config)
      .then(({ data }) => {
        setAllMessages(data);
        setLoaded(true);
      });
  }, [refresh, chat_id, userData.data.token]);

  if (!loaded) {
    return (
      <div className="flex flex-col gap-2 p-2">
        <Skeleton variant="rectangular" className="w-full h-16 rounded-lg" />
        <Skeleton variant="rectangular" className="w-full flex-grow rounded-lg" />
        <Skeleton variant="rectangular" className="w-full h-16 rounded-lg" />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col h-full">
        {/* Message Header */}
        <div className="flex items-center gap-2 bg-white p-2 m-2 rounded-xl">
          <p className="flex justify-center items-center bg-[#d9d9d9] text-white font-bold text-2xl h-8 w-8 rounded-full">
            {chat_user[0]}
          </p>
          <div className="flex-grow flex flex-col justify-center">
            <p className="font-bold text-gray-700">{chat_user}</p>
          </div>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>

        {/* Messages Container */}
        <div className="flex-grow overflow-y-auto p-2">
          {allMessages.slice(0).reverse().map((message, index) => {
            const sender = message.sender;
            const self_id = userData.data._id;
            return sender._id === self_id ? (
              <MessageSelf props={message} key={index} />
            ) : (
              <MessageOthers props={message} key={index} />
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Text Input */}
        <div className="flex items-center m-2 bg-white p-2 rounded-xl">
          <input
            placeholder="Type a Message"
            className="flex-grow p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                sendMessage();
              }
            }}
          />
          <IconButton onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    );
  }
};

export default ChatArea;
