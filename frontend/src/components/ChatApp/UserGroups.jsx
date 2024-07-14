import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshSidebarFun } from "../../Features/refreshSidebar.js"
import { myContext } from "./MainContainer";

const UserGroups = () => {
  const { refresh, setRefresh } = useContext(myContext);

  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  const dispatch = useDispatch();

  if (!userData) {
    console.log("User not Authenticated");
    nav(-1);
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("https://medihacks-five.vercel.app/user/fetchUsers", config).then((data) => {
      setUsers(data.data);
    });
  }, [refresh, userData.data.token]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: "0.3",
        }}
        className="flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex items-center gap-2 rounded-xl border-b-2 bg-white m-2 p-4">
          <span className="font-bold text-lg">Available Users</span>
          <IconButton className="ml-auto" onClick={() => setRefresh(!refresh)}>
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

        {/* Users List */}
        <div className="flex flex-col gap-2 rounded-xl bg-white m-2 p-4 flex-grow overflow-y-auto">
          {users.map((user, index) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 p-2 border-b cursor-pointer"
              key={index}
              onClick={() => {
                const config = {
                  headers: {
                    Authorization: `Bearer ${userData.data.token}`,
                  },
                };
                axios.post(
                  "https://medihacks-five.vercel.app/chat/",
                  {
                    userId: user._id,
                  },
                  config
                );
                dispatch(refreshSidebarFun());
              }}
            >
              <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="font-semibold">{user.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UserGroups;
