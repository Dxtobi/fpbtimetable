import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// Components
import Home from "../Layout/Home/Home";
import NavBar from "../Layout/NavBar/NavBar";
import Add from "../Layout/Add/Add";
import Edit from "../Layout/Edit/Edit";
import Generate from "../components/GenerateTable/Generate";
import axios from "axios";


const Routes = () => {

  const [logedIn, setLogedIn] = useState(true);
  const [register, setRegister] = useState(false);
  const [staffid, setStaffId] = useState('');
  const [password, setPassword] = useState('');

  const item = localStorage.getItem('ttg')

  useEffect(() => {
    return () => {
      
      if (!item) {
        setLogedIn(true);
        setRegister(true)
      }
      console.log(item)
    }
  }, [item])

  const handleRegister = () => {
    console.log('hit')
    registerNewUser()
  }

  const handleLogin = async () => {

    let data = {
      staffid: staffid,
      password: password,
    }
    try {
      //console.log("hit here first", data)
      const newStudent = await axios.post("/api/students/login", data);
      if (newStudent.data) {
        console.log(newStudent.data.newUser)
        localStorage.setItem('ttg', JSON.stringify(newStudent.data.newUser))
          setLogedIn(false);
          setRegister(false);
      }
    } catch (err) {
      console.log("err::::", err.message)
    }
  }

  const registerNewUser = async (e) => {

    console.log('hit---')
    let data = {
      staffid: staffid,
      password: password,
      
    }

    try {
      //console.log("hit here first", data)
      const newStudent = await axios.post("/api/students/register", data);
      if (newStudent.data) {
        console.log(newStudent.data)
        setLogedIn(true);
        setRegister(false);
      }

    } catch (err) {
      console.log("err::::", err.message)
      
    }
  };

  if (register) {
    return (<div className="form-div">
      <img src="./fpblogo.jpg" className="bida-logo" alt=""/>
      <div className="header__"><h2>CREAT NEW ACCOUNT</h2></div>
      <div className="form-holder">
        <label>ENTER STAFF ID</label>
        <input className="form-input_" value={staffid} onChange={(e)=>{setStaffId(e.target.value)}} placeholder="STAFF ID" />

        <br />

        <label>ENTER PASSWORD</label>
        <input type='password' className="form-input_" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="ENTER PASSWORD" />
      </div>
      <button onClick={handleRegister } className="sub-btn">REGISTER</button>
      <div>Have An Account?  <button onClick={() => { setLogedIn(true); setRegister(false) }} className="sub-sub-btn">Login</button></div>
    </div>)
  }

  if (logedIn) {
    return (<div className="form-div">
      <img src="./fpblogo.jpg" className="bida-logo" alt=""/>
      <div className="header__"><h2>LOGIN</h2></div>
      <div className="form-holder">
        <label>ENTER STAFF ID</label>
        <input className="form-input_" value={staffid} onChange={(e)=>{setStaffId(e.target.value)}} placeholder="STAFF ID" />

        <br />

        <label>ENTER PASSWORD</label>
        <input type='password' className="form-input_" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="ENTER PASSWORD" />
      </div>
      <button onClick={ handleLogin } className="sub-btn">Login</button>
      <div>No Account?  <button onClick={() => { setLogedIn(false); setRegister(true) }} className="sub-sub-btn">Register</button></div>
    </div>)
  }

  return (
    <Fragment>
        <NavBar/>
      <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/add" component={ Add } exact />
          <Route path="/edit" component={Edit} exact />
          <Route path="/generate" component={ Generate } exact />
        </Switch>
      </Fragment>
  );
};

export default Routes;
