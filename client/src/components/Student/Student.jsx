import React from 'react';
import './Student.css';
//import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const Student = ({ _id, lecturer, coursecode, level, removeStudent }) => {

  return(
    <tr>
      <td>{ lecturer }</td>
      <td>{ coursecode }</td>
      <td>{ level }</td>
      

    </tr>
  );
};

export default Student;
