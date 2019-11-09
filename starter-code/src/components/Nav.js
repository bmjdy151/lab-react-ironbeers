import React from "react";
import { Link } from "react-router-dom";

export  function Nav() {
  return (
    <div>
      <div className="box-container">
        <img src="/images/beers.png" alt=""/>
        <Link to="/beers">All Beers</Link>
        <p className="box-description">get all beers information</p>
      </div>
      <div className="box-container">
        <img src="/images/random-beer.png" alt=""/>
        <Link to="/random-beer">Romdon Beer</Link>
        <p className="box-description">get random beer information</p>
      </div>
      <div className="box-container">
        <img src="/images/new-beer.png" alt=""/>
        <Link to="/new-beer">New Beer</Link>
        <p className="box-description">put new beer information</p>
      </div>
    </div>
  );
}
