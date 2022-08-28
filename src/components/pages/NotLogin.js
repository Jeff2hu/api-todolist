import React from 'react';
import { Link } from 'react-router-dom';

const NotLogin = () => {
  return (
    <div id="loginPage" className="bg-yellow">
    <div className="conatiner loginPage vhContainer">
      <div className="side">
        <a><img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="logoImg"/></a>
        <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg"/>
      </div>
      <form className="formControls">
        <Link className="formControls_btnSubmit" style={{width:"250px",paddingTop:"15px"}} to="/">You Need To Login First</Link>
      </form>
    </div>
  </div>
  )
}

export default NotLogin