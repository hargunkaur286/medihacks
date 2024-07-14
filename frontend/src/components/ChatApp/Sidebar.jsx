import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshSidebarFun } from "../../Features/refreshSidebar";
import { myContext } from "./MainContainer";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { refresh, setRefresh } = useContext(myContext);
  const [conversations, setConversations] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    console.log("User not Authenticated");
    navigate("/");
  }

  const user = userData.data;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get("http://localhost:8080/chat/", config).then((response) => {
      setConversations(response.data);
    });
  }, [refresh, user.token]);

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white border-r-2 pt-1 pb-1 pr-2 pl-2 rounded-xl m-2">
        <div className="flex justify-between">
          <div>
            <IconButton onClick={() => navigate("/app/welcome")}>
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div>
            <IconButton onClick={() => navigate("users")}>
              <PersonAddIcon />
            </IconButton>
            <IconButton onClick={() => navigate("groups")}>
              <GroupAddIcon />
            </IconButton>
            <IconButton onClick={() => navigate("create-groups")}>
              <AddCircleIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                localStorage.removeItem("userData");
                navigate("/");
              }}
            >
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="bg-white border-r-2 p-2 rounded-xl m-2 flex items-center">
        <input
          placeholder="Search"
          className="flex-grow rounded-xl p-2 border border-gray-300"
        />
        <IconButton className="ml-2">
          <SearchIcon />
        </IconButton>
      </div>

      <div className="bg-white border-r-2 pt-1 pb-2 pr-2 pl-2 rounded-xl m-2 flex-grow overflow-y-auto">
        {conversations.map((conversation, index) => {
          // Filter out the logged-in user to find the other participant
          const otherUser = conversation.users.find(
            (u) => u._id !== user._id
          );

          if (!otherUser) {
            return null;
          }

          return (
            <div
              key={index}
              className="conversation-container flex items-center gap-2 p-2 border-b cursor-pointer"
              onClick={() => {
                navigate(
                  "chat/" +
                    conversation._id +
                    "&" +
                    otherUser.name
                );
              }}
            >
              <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                {otherUser.name[0]}
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-gray-700">
                  {otherUser.name}
                </p>
                <p className="text-sm text-gray-500">
                  {conversation.latestMessage
                    ? conversation.latestMessage.content
                    : "No previous Messages, click here to start a new chat"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
