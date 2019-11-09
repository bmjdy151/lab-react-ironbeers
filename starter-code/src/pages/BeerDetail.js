import React, { Component } from "react";
import { Header } from  "../components/Head";
import BeerService from "../components/BeerService";
import Beer from "../components/Beer";

export default class SingleBeer extends Component {
  constructor(){
    super();
    this.state ={
      beer:null
    };
    this.beerService = new BeerService();
  }


  componentDidMount = async() =>{
    const { id } = this.props.match.params;
    let beer;
    try{
      if (id) beer = await this.beerService.getOneBeer(id);
      else beer = await this.beerService.getRandomBeer();
      this.setState({ beer });
    }catch(err){
      debugger;
      console.log(err);
    }
  }


render(){
  return(
    <div className="contents-container">
      <div className="header">
        <Header />
      </div>
      <div className="allbeer-container">
        <h2>this is beerdetail</h2>
        {<Beer {...this.state.beer} isDetailed />}
      </div>
    </div>
    );
  }
}
