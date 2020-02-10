import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function NavBar() {
  return (
    <nav className={"headerList"}>
      <ul className={"headerList"}>
        <div>
          <img src={logo} />
        </div>
        <div className={"optionsList"}>
          <li className={"headerListItem"}>
            <NavLink exact activeClassName="active" to="/">
              Dashboard
            </NavLink>
          </li>
          <li className={"headerListItem"}>
            <a>Sign In</a>
          </li>
          <li className={"headerListItem"}>
            <a>Classes</a>
          </li>
          <li className={"headerListItem"}>
            <a>Workshops</a>
          </li>
          <li className={"headerListItem"}>
            <a>Appointments</a>
          </li>
          <li className={"headerListItem"}>
            <a>Client Home</a>
          </li>
          <li className={"headerListItem"}>
            <a>Retail</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
