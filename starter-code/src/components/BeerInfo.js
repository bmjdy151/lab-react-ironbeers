import React from "react";
// import {Link} from "react-router-dom";

export default function BeerInfo({ name, image_url, tagline, contributed_by}){
  return(
    <div className="beer-container">
      <img src={image_url} alt=""/>
      <div className="beer-text-container">
        <p className="beer-name">{name}</p>
        <p className="beer-description">{tagline}</p>
        <p className="beer-contributor">Created by:{contributed_by}</p>
      </div>
    </div>
  )
}