import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./auth/home";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import Todo from "./auth/todo";

function App() {
  return (
    <div>
      <div className="navbar">
        <Link to="/" className="logo">
          Todo
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
