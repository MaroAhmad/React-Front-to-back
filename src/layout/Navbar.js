import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <div class="container-fluid">
        <a href="fab fa-github " class="navbar-brand">
          Github Finder
        </a>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "",
  icon: "fab fa-github",
};

export default Navbar;
