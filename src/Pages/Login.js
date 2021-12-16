import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {loginSlice, } from "../redux/authSlice";
import '../App.css'


const Login = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({ title: "", password: "" });

  const login = (event) => {
    event.preventDefault();
    if(data.password === '123'){
      localStorage.setItem("auth", true);
      dispatch(loginSlice(true))
    }else{alert("Please Registry")}
  };
  return (
    <form onSubmit={login} className="form_login">
      <p>Password: <span style={{fontFamily:'system-ui'}}>123</span></p>
      <input
        type="text"
        placeholder="username..."
        value={data.title}
        onChange={(event) => setData({ ...data, title: event.target.value })}
      />
      <input
        type="password"
        placeholder="password..."
        value={data.password}
        onChange={(event) => setData({ ...data, password: event.target.value })}
      />
      <button>Log in</button>
    </form>
  );
};

export default Login;
