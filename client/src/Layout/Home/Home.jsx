import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Student from "../../components/Student/Student";
import SearchStudents from "../../components/SearchStudent/SearchStudents";

class Home extends Component {
  state = {
    data: null,
    allStudents: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const students = await axios.get("/api/courses/");
      console.log(students.data.course )
      this.setState({ data: students.data });
    } catch (err) {
      console.log(err)
      this.setState({ error: err.message });
    }
  }

  removeStudent = async id => {
    try {
      const studentRemoved = await axios.delete(`/api/students/${id}`);
      const students = await axios("/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchStudents = async username => {
    let allStudents = [...this.state.data.course];
    if (this.state.allStudents === null) this.setState({ allStudents });

    let students = this.state.data.course.filter(({ lecturer }) =>
    lecturer.toLowerCase().includes(username.toLowerCase())
    );
    if (students.length > 0) this.setState({ data: { students } });

    if (username.trim() === "")
      this.setState({ data: { students: this.state.allStudents } });
  };

  render() {
    let students;

    if (this.state.data)
      students =
        this.state.data.course &&
        this.state.data.course.map(student => (
          <Student key={student._id} {...student} removeStudent={this.removeStudent} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.course.length)
        return <h1 className="No-Students">Lectures set yet!</h1>;

    return (
      <div className="Table-Wrapper">
        <h1>Lecturers And Courses:</h1>
        <table className="Table">
          <thead>
            <tr>
              <th>Lecturer</th>
              <th>Course Code</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;
