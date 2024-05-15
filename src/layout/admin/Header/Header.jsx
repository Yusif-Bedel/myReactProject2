import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="navBottom">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/admin"}>Products</Link>
            </li>
            <li>
              <Link to={"add"}>Add</Link>
            </li>
            <li>
              <a href="#">NEW ARRIVALS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
