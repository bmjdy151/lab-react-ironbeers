import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="head-container">
      <Link to="/">
        <div className="home-container">
          <img src="/images/home.png" alt=""/>
        </div>
      </Link>
    </div>
  );
}
