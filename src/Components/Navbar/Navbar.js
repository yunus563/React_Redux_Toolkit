import React from 'react'
import classes from './navbar.module.css'
import {Link} from 'react-router-dom'
import { useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {logoutSlice} from "../../redux/authSlice";



const Navbar = () => {

  const auth = useSelector(state => state.authSlice.auth)
  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch(logoutSlice())
    localStorage.removeItem('auth')
  }
 
  return (
    <div className={classes.navbar}>
      <div>
        <Link to="/"><h2 style={{color:'black'}}>User: <span style={{color:'#03a9f4'}}></span></h2></Link>
      </div>
      <div className={classes.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {
          auth
          ? ''
          : <button onClick={logout} style={{color:'red'}}>Log out</button>
        }
      </div>
    </div>
  )
}

export default Navbar
