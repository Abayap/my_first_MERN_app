import React, {  } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from "./components/Login/login";
import Signup  from './components/Login/signup';
import Home from "./components/Home/home";
import Jobdetailes from './components/Detailes/Job_detailes';
import Nav from './components/navBar/nav';
import Details from './components/Detailes/datail';
import Addnew from'./components/Addjob/addnew';

const App =()=>{
 
    return (
    <Router>
      <Routes>
        <Route path='/login'element={<Login/>}/>
        <Route path='/'element={<Home/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/jobdetailes'element={<Jobdetailes/>}/>
        <Route path='/nav'element={<Nav/>}/>
        <Route path='/details'element={<Details/>}/>
        <Route path='/addnew'element={<Addnew/>}/>
      </Routes>
    </Router>
    )
  }


export default App;