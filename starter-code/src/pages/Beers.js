import React, { Component } from "react";
import { Header } from  "../components/Head";
import BeerService from "../components/BeerService";
import Beer from "../components/Beer";

export default class Beers extends Component {
  constructor(props){
    super(props);
    this.state ={
      allBeers:[]
    };
    this.beerService = new BeerService();
  }


  componentDidMount = async() =>{
    try{
      const allBeers = await this.beerService.getAllBeers();
      this.setState({allBeers});
    }catch(err){
      debugger;
      console.log(err);
    }
  }

  renderBeers = () =>{
    return this.state.allBeers.map((oneBeer, i) => {
      return <Beer key={i} {...oneBeer} />;
    })
  }


render(){
  return(
    <div className="contents-container">
      <div className="header">
        <Header />
      </div>
      <div className="allbeer-container">
        {this.renderBeers()}
      </div>
    </div>
    );
  }
}

