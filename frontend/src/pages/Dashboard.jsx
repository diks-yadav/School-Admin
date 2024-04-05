import React from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const email = localStorage.getItem("email");
  return (
    <div>
      <nav>
        <ul type="none">
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/about">About us</Link>
          </li>
          <li className="list">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="list">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <br></br>

      <main style={{ height: "500px" }}>
        <Outlet />
      </main>

      <div>Footer</div>
    </div>
  );
}
