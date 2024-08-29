import React, { useState } from 'react';
import "./com.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import NavBar from '../navBar/nav'
const Login =()=> {
  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const handlelodin=(e)=>{
    e.preventDefault();
    const datavalue ={
      username,
      password
    }
    // console.log(datavalue);
    try{
      const responce = axios.post('http://localhost:8080/api/login',datavalue)
      console.log(responce.data.msg);
      if(responce.data.msg === 'check your username or password'){
        alert(responce.data.msg)
      }
    }
    catch (err){
      console.log(err);
    }
  }
    return (
    <div>
      <NavBar />
      <div className='min-com-styl'>
        <div className="sub-com">
            <label htmlFor="username">UserName</label>
            <input id='username' value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
    
            <label htmlFor="password">Password</label>
            <input id='password'value={password}onChange={(e)=>setPassword(e.target.value)} type="password" /><br/>
    
            <button onClick={handlelodin}>Login</button>
            <Link to='/signup' className='jb-lbk-one'>I don't have an Account</Link>
        </div>
    </div>
    </div>
    
    )
  }
  export default Login

