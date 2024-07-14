import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../../assets/images/logo.png"
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import RefreshIcon from "@mui/icons-material/Refresh";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshSidebarFun } from "../../Features/refreshSidebar";
import { myContext } from "./MainContainer";

const Groups = () => {
  const { refresh, setRefresh } = useContext(myContext);

  const dispatch = useDispatch();
  const [groups, setGroups] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    console.log("Users refreshed : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get("https://medihacks-five.vercel.app/chat/fetchGroups", config)
      .then((response) => {
        console.log("Group Data from API ", response.data);
        setGroups(response.data);
      });
  }, [refresh]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex items-center gap-2 rounded-xl border-b-2 bg-white m-2 p-4">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 ml-2"
          />
          <p className="font-bold text-lg">Available Groups</p>
          <IconButton
            className="ml-auto"
            onClick={() => setRefresh(!refresh)}
          >
            <RefreshIcon />
          </IconButton>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 rounded-xl border-b-2 bg-white m-2 p-4">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input
            placeholder="Search"
            className="flex-grow rounded-xl p-2 border border-gray-300"
          />
        </div>

        {/* Groups List */}
        <div className="flex flex-col gap-2 rounded-xl bg-white m-2 p-4 flex-grow overflow-y-auto">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 p-2 border-b cursor-pointer"
              onClick={() => {
                console.log("Creating chat with group", group.name);
                dispatch(refreshSidebarFun());
              }}
            >
              <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="font-semibold">{group.chatName}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Groups;
