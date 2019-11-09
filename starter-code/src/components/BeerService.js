import axios from "axios";

export default class BeerService{
  constructor(){
    this.service = axios.create({
      baseURL:process.env.REACT_APP_BEER_API_URL,
      withCredentials:true
    });
  }

  getAllBeers = async () =>{
    try{
      const {data} = await this.service.get("beers");
      // debugger;
      return data;
    }
    catch(err){
      console.log(err);
    }
  };

  getOneBeer = async id =>{
    try{
      const {data} = await this.service.get(`beers/${id}`);
      // debugger;
      return data;
    }
    catch(err){
      console.log(err);
    }
  };
}