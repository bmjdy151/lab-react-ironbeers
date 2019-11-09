import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import {Nav} from "./components/Nav";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetail from "./pages/BeerDetail";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Nav} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path={["/beer-detail/:id", "/random-beer"]} component={BeerDetail}/>
            <Route path="*" component={NotFound} />
        </Switch>
      </div>  
    );
  }
}


export default App;
