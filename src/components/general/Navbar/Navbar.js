import React from 'react';

const Navbar = () => {
    return (
        <>
        <nav id="main-nav">
      <div id="nav-branding"><p id="nav-branding-p">Nocturnal Games</p></div>
      <ul id="nav-ul">
        <li class="nav-li">
          <a href="" id="av-li-a">About Us</a>
          <a href="" id="av-li-a">Shop</a>
          <a href="" id="av-li-a">Event Calendar</a>
          <a href="" id="av-li-a">Contact Us</a>
        </li>
      </ul>
      <button class="btn">LOGIN</button>
    </nav>
    <div className="nav-bg"></div>
    </>
    )
}

export default Navbar
