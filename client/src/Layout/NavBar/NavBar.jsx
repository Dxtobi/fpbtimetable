import React, {useEffect, useState} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {

  const [auth, setAuth] = useState(false)
  const item = localStorage.getItem('ttg')


  useEffect(() => {
      const decode = JSON.parse(item)
      console.log(decode)
      if (!item) {
        return setAuth(false);
      } else {
        if (decode.admin) {
          console.log('kkk')
          return setAuth(true)
        }
      }
  }, [])






  return (
   <nav className="NavBar-Wrapper navBar-wrapper">
     <div>
       <h3 className="NavBar-Title">FPB TIMETABLE GENERATOR</h3>
     </div>
     <div className="NavBar-Links">
        <Link to="/" className="NavBar-Link">Home</Link>
        {
          auth && <Link to="/add" className="NavBar-Link">Add</Link>
        }
        {
          auth && <Link to="/generate" className="NavBar-Link">Generate</Link>
        }
      
      
     </div>
   </nav>
  );
};

export default Home;
