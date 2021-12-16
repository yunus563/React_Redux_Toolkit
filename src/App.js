import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/RouterController";
import Navabar from "./Components/Navbar/Navbar";
import {useDispatch} from "react-redux";
import {loginSlice} from "./redux/authSlice";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem("auth")){
      dispatch(loginSlice(true))
    }
  }, [dispatch]);
 
  return (
    <Router>
      <Navabar />
      <AppRouter />
    </Router>
  );
};

export default App;
