import React  from 'react';


const Navbar =({icon,title}) => {

  return (
    <nav className="navbar bg-primary" >
        <h1>
        <i className= {icon}/> {title}
        Github
    </h1>

    </nav>
  
  )  
  };
  
  Navbar.defaultProps ={
    title:'',
    icon:'fab fa-github'
  };



export default Navbar