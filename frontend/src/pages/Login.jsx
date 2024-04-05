import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsTrue(true);
    axios
      .post("http://localhost:9090/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.status == 1) {
          alert(`${res.data.message}`);

          window.localStorage.setItem("email", res.data.email);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          alert(`${res.data.message}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error.message}`);
      });
  };
  console.log("state=", isTrue);
  return (
    <div>
      <h1>Login form for Education Management</h1>
      <div>
        <label>Username</label>
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={email}
          className="p-2 m-5 rounded-2xl"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="enter password"
          className="p-2 m-5 rounded-2xl"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <span>
          <Link to="/forgot-password">forgot password</Link>
        </span>
      </div>

      Don't have an Account?<Link to="/register" className="ml-2">Register</Link>

      {/* <button onClick={handleClick}>Login</button> */}
      <Button name="Login" onclick={()=>handleClick} className="p-2 text-sm text-white bg-orange-500 rounded-xl cursor-pointer hover:bg-blue-500"/>
    </div>
  );
}
