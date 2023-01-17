import React from 'react';
import "../Navbar.css"
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

export default function Navbar(props){
    return(
      <>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} navbar-${props.mode} bg-${props.mode} `} >

  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.About}</Link>
      </li>
     
    </ul>
  </div>

  <button className={`btn btn-warning btn-circle`} onClick={props.yellowMode}>Yellow</button>
  <button className='btn btn-primary btn-circle' onClick={props.darkMode}>Dark</button>
  <button className='btn btn-light btn-circle' onClick={props.lightMode}>Light</button>

  {/* <div className="form-check form-switch">
  <input onClick={props.greenMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${((props.mode==="light")||(props.mode==="dark"))?"success":"light"}`} htmlFor="flexSwitchCheckDefault ">Green Mode</label>
  
</div>


  <div className="form-check form-switch">
  
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${((props.mode==="light")||(props.mode==="success"))?"dark":"light"}`} htmlFor="flexSwitchCheckDefault ">Dark Mode</label>
  
</div> */}
</nav>

</>
    );
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Enter title here"
}