import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import Toaster from "./Toaster";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [logInStatus, setLogInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://medihacks-five.vercel.app/user/login/",
        data,
        config
      );
      setLogInStatus({ msg: "Success", key: Math.random() });
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/chat/app/welcome");
    } catch (error) {
      setLogInStatus({
        msg: "Invalid User name or Password",
        key: Math.random(),
      });
    }
    setLoading(false);
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://medihacks-five.vercel.app/user/register/",
        data,
        config
      );
      setSignInStatus({ msg: "Success", key: Math.random() });
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/chat/app/welcome");
    } catch (error) {
      if (error.response.status === 405) {
        setLogInStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setLogInStatus({
          msg: "User Name already Taken, Please take another one",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="bg-slate-200 h-[90vh] w-[90vw] flex rounded-xl mt-10">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>

      <div className="bg-white border-r-2 p-4 rounded-xl m-2 w-[30%] flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <img src={logo} alt="Logo" className="max-w-full h-auto" />
        </div>
      </div>

      <div className="bg-white border-r-2 p-4 rounded-xl m-2 w-[70%] flex flex-col justify-center items-center">
        {showLogin ? (
          <>
            <div className="w-full flex flex-col items-center mb-4">
              <h1 className="text-4xl font-bold mb-6">Login to your Account</h1>
            </div>
            <TextField
              onChange={changeHandler}
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              fullWidth
              margin="normal"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  loginHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
              fullWidth
              margin="normal"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  loginHandler();
                }
              }}
            />
            <button className="bg-primaryColor py-2 px-6 text-gray-50 font-[600] h-[44px] flex items-center justify-center rounded-[50px]" onClick={loginHandler}>
                Login
            </button>
            <p className="mt-4">
              Don't have an Account?{" "}
              <span
                className="text-primaryColor font-bold cursor-pointer"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </span>
            </p>
            {logInStatus && (
              <Toaster key={logInStatus.key} message={logInStatus.msg} />
            )}
          </>
        ) : (
          <>
            <div className="w-full flex flex-col items-center mb-4">
              <h1 className="text-4xl font-bold mb-6">Create your Account</h1>
            </div>
            <TextField
              onChange={changeHandler}
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              fullWidth
              margin="normal"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              label="Enter Email Address"
              variant="outlined"
              color="secondary"
              name="email"
              fullWidth
              margin="normal"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
              fullWidth
              margin="normal"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <button className="bg-primaryColor py-2 px-6 text-gray-50 font-[600] h-[44px] flex items-center justify-center rounded-[50px]" onClick={signUpHandler}>
              Sign Up
            </button>
            <p className="mt-4">
              Already have an Account?{" "}
              <span
                className="text-primaryColor font-bold cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                Log in
              </span>
            </p>
            {signInStatus && (
              <Toaster key={signInStatus.key} message={signInStatus.msg} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
