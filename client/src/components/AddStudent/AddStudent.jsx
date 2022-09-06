import React, { Component } from "react";
import './AddStudent.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddStudent extends Component {
  state = {
    lecturer: "",
    coursecode: "",
    coursename: "",
    level:"",
    response: ""
  };

  /**      lecturer
coursecode
coursename
level */

  onChangeHandler = (e) => {  this.setState({ [e.target.name]: e.target.value });}

  addStudent = async (e) => {
    e.preventDefault();
    const {lecturer,coursecode, coursename,level} = this.state
    let data = {
      lecturer:lecturer,coursecode:coursecode, coursename:coursename, level:level
    }
    try {
      //console.log("hit here first", data)
      const newStudent = await axios.post("/api/courses/", data);

      toast("curse  added successfully", { type: toast.TYPE.SUCCESS, autoClose: 3000 });
      this.setState({
        lecturer:"", coursecode:"", coursename:"", level:""
      })
    } catch (err) {
     // console.log(err, err.message)
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    const {lecturer, coursecode, coursename, level} = this.state
    return (
      <div className="AddStudent-Wrapper">
        <h1>Add Course</h1>
        <form onSubmit={this.addStudent}>
          <label htmlFor="name">Lecturers Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the Lecturer"
            name="lecturer"
            onChange={this.onChangeHandler}
            ref="lecturer"
            className="Add-Student-Input"
            required
            minLength="3"
            maxLength="33"
            id="lecturer"
            value={lecturer}
          />
          <label htmlFor="name">Course code</label>
          <input
            value={coursecode}
            type="text"
            placeholder="Enter Course Code"
            name="coursecode"
            onChange={this.onChangeHandler}
            ref="coursecode"
            className="Add-Student-Input"
            required
            minLength="3"
            maxLength="33"
            id="coursecode"
          />
          <label htmlFor="name">Course Name</label>
          <input
            value={coursename}
            type="text"
            placeholder="Enter Course Name"
            name="coursename"
            onChange={this.onChangeHandler}
            ref="coursename"
            className="Add-Student-Input"
            required
            minLength="3"
            maxLength="33"
            id="coursename"
          />
          <label htmlFor="name">Level</label>
          <input
            value={level}
            type="text"
            placeholder="Enter level"
            name="level"
            onChange={this.onChangeHandler}
            ref="level"
            className="Add-Student-Input"
            required
            minLength="3"
            maxLength="33"
            id="level"
          />
          <button type="submit" className="Add-Student-Submit fa fa-plus">Add </button>
          <button type="reset" className="Add-Student-Reset fa fa-refresh">Reset</button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddStudent;
