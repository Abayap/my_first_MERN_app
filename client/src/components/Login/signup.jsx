import React, { useState } from 'react'
import "./com.css"
import { Link } from 'react-router-dom';
import NavBar from '../navBar/nav'

const Signup = () => {
   const[username,setUsername]=useState('');
   const[email,setemail]=useState('');
   const[password,setPassword]=useState('');
   const[confirmpassword,setconfirmpassword]=useState('');
    const handlelodin=(e)=>{
        e.preventDefault();
        const datas={
            username,
            password,
            email,
            confirmpassword
        }
        console.log(datas)
    }

    return (
        <div>
            
        <NavBar />
        <div className='form-container'>
        <div className="form-content">
            <h2>Register</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input id="username" value={username} onChange={(e)=>setUsername(e.target.value)} type="text"  />
    
                <label htmlFor="email">Email</label>
                <input id="email" value={email} onChange={(e)=>setemail(e.target.value)} type="email"  />
    
                <label htmlFor="password">Password</label>
                <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)}  type="password"  />
    
                <label htmlFor="confirm-password">Confirm Password</label>
                <input id="confirm-password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}  type="password"  />
    
                <button onClick={handlelodin} type="submit">Register</button>
                <Link to='/login' className='jb-lbk-one'>I Already have an account</Link>
            </form>
        </div>
    </div>
        </div>
    
    )
}

export default Signup
