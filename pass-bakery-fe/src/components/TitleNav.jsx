import React from "react";
import logo from "../images/1p-site-logo.svg";
import bread from "../images/bread.jpeg";

function TitleNav() {
  return (
    <div id="head-container">
      <div id="title-hours">
        <img src={logo} alt="one pass logo" />
        <h1>Pass Bakery</h1>
        <p>620 N 25th St, San Francisco, CA</p>
        <h2>Bakery Hours:</h2>
        <p>
          Mon-Fri 6AM-5PM PT,
          <br />
          Sat-Sun 7AM-4PM PT
        </p>
      </div>
      <img id="bread-image" src={bread} alt="fresh baked bread" />
    </div>
  );
}

export default TitleNav;
