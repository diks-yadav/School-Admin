import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtp, setIsOtp] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleForgot = () => {
    axios
      .post("http://localhost:9090/api/forgot-password", {
        email,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.status == 1) {
          alert("success");
          setIsOtp(true);
        } else {
          alert("failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error.message}`);
      });
  };
  const handleOtpVerify = () => {
    axios
      .post("http://localhost:9090/api/otp-verify", {
        email,
        otp,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.status == 1) {
          alert("success");
          setIsOtp(true);
          setIsVerify(true);
        } else {
          alert("failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error.message}`);
      });
  };
  const handleReset = () => {
    axios
      .post("http://localhost:9090/api/reset-password", {
        email,
        password,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.status == 1) {
          alert("success");
          setIsOtp(true);
          setIsVerify(true);
          navigate("/login");
        } else {
          alert("failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error.message}`);
      });
  };
  return (
    <div>
      <h1>Reset Password</h1>
      <labe>Email</labe>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br></br>
      {isOtp ? (
        <>
          <labe>Enter OTP</labe>
          <input
            type="text"
            placeholder="Enter Otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          ></input>
        </>
      ) : (
        ""
      )}
      {isVerify ? (
        <>
          <labe>Enter New Password</labe>
          <input
            type="text"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </>
      ) : (
        ""
      )}
      <br />
      {isVerify ? (
        <button onClick={handleReset}>Reset Password</button>
      ) : (
        <button onClick={isOtp ? handleOtpVerify : handleForgot}>
          {isOtp ? "Verify" : isVerify ? "Reset" : "Forgot"}
        </button>
      )}
    </div>
  );
}
