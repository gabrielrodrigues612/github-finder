import React from "react";

function Navbar({ icon, title }) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github"
};

export default Navbar;
