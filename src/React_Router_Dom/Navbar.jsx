import React from "react";
import { Link } from "react-router-dom";
import "./stely.css";
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About </Link>
        </li>

        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/sererc">
          <li>Servers</li>
        </Link>
      </ul>
    </div>
  );
}
