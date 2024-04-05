import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import IncDec from "./components/IncDec";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ForgotPassword from "./pages/ForgotPassword";
import DashboardLayout from "./pages/DashboardLayout";
import Test from "./pages/Test";
import Attendance from "./pages/Attendance";
import StudyMatrial from "./pages/StudyMatrial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
          <Route path="attendance" element={<Attendance />}></Route>
          <Route path="test" element={<Test />}></Route>
          <Route path="study-material" element={<StudyMatrial />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
