import React, { useState } from "react";
import Button from "../components/buttons/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleRegister = () => {
    // alert(`${firstname} ${lastname} ${email},${password}`);
    axios
      .post("http://localhost:9090/register", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((res) => {
        alert(`${res.data.message}`);
        navigate("/login");
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error.message}`);
      });
  };
  return (
    <div>
      <h2 className="text-white">User Register</h2>
      <div className="grid grid-cols-2">
        <div>
          <label>firstname</label>
          <input
            type="text"
            placeholder="enter firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstame(e.target.value)}
            className="p-2 m-5 rounded-2xl"
          ></input>
        </div>
        <div>
          <label>lastname</label>
          <input
            type="text"
            placeholder="enter lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="p-2 m-5 rounded-2xl"
          ></input>
        </div>
        <div>
          <label className="mr-7">email</label>
          <input
            type="text"
            placeholder="enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-2xl"
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="text"
            placeholder="enter password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 m-5 rounded-2xl"
          ></input>
        </div>
      </div>

      <div>
        <span>
          Aleady have an Account? <Link to="/login">Login</Link>
        </span>
      </div>
      <Button
        name="Register"
        backgroundColor="orange"
        onclick={() => handleRegister()}
        className="p-2 text-sm text-white bg-orange-500 rounded-xl cursor-pointer hover:bg-blue-500"
      />
    </div>
  );
}
