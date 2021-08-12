import React from "react";
import "../../../assets/css/styles.css";

const Navbar = () => {
  const linkArr = ['About Us', 'Shop', 'Events Calendar', 'Contact Us'];

  return (
    <>
      <nav id="main-nav">
        <div id="branding-col">
          <a id="nav-branding-a" href="/">Nocturnal Games</a>
        </div>
        <div id="links-col">
        <ul>
          {linkArr.map((link) => {
            return (
            <li className="nav-li">
            <a href="" className="nav-li-a">
              {link}
            </a>
          </li>
            )
          })}
        </ul>
        </div>
        <div id="btn-col">
        <button className="nav-btn">LOGIN</button>
        </div>
      </nav>
      <div className="nav-bg"></div>
    </>
  );
};

export default Navbar;
