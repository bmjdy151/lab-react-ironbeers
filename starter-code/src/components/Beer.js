import React from "react";
import {Link} from "react-router-dom";

export default function Beer({ name, image_url, tagline, contributed_by, _id, isdetailed, description}){
  debugger;
  if(isdetailed){
    debugger;
    return(
      <div className="beerdetail-container">
        <div className="beerdetail-subcontainer">
          <img src={image_url} alt=""/>
          <p></p>
        </div>
        <div className="beerdetail-subcontainer">
          <p className="beer-tagline">{tagline}</p>
          <p></p>
        </div>
        <p className="beer-description">{description}</p>
        <p className="beer-contributor">{contributed_by}</p>
    </div>
    )
  }
  return(
    <div className="beer-container">
      <img src={image_url} alt=""/>
      <div className="beer-text-container">
        <Link to={`/beer-detail/${_id}`}>
        <p className="beer-name">{name}</p>
         </Link>
        <p className="beer-tagline">{tagline}</p>
        <p className="beer-contributor">Created by:{contributed_by}</p>
      </div>
    </div>
  )
}