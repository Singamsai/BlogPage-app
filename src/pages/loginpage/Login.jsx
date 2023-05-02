import React, { useState } from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import login from "../../redux/Action";
import { toast } from "react-toastify";

export default function Login() {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginCred, setcheck } = useSelector((data) => data);

  function logindata() {
    fetch("https://api.github.com/search/users?q=Singamsai")
      .then((res) => res.json())
      .then((data) => {
        dispatch(login(data.items));
      });
  }

  const login_check = () => {
    if (
      (password === loginCred.password && username === loginCred.username) ||
      (username === "admin" && password === "12345")
    ) {
      toast.success("Login Successfull");
      logindata();
      setcheck(true);
      navigate("/home");
    } else {
      alert("plese enter valid credentials");
    }
  };

  return (
    <div className="login">
      <form>
        <h1 className="login_name">Login</h1>
        <div className="login_username">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FaUser style={{ color: "gray" }} />
        </div>
        <div className="login_password">
          <input
            type={visible ? "text" : "password"}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {visible ? (
            <MdVisibility
              style={{ color: "black" }}
              onClick={() => {
                setVisible(!visible);
              }}
            />
          ) : (
            <MdVisibilityOff
              style={{ color: "gray" }}
              onClick={() => {
                setVisible(!visible);
              }}
            />
          )}
        </div>
        <button className="login_submit" onClick={login_check}>
          Login
        </button>
      </form>
    </div>
  );
}
