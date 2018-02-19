import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Random from './Random';
//git config --global core.autocrlf true

class SearchBox extends Component {
  constructor(){
    super();
      this.state = {
        search : "",
        object : {},
        titles : [],
        description : [],
        links: [],
    }
    this.fetchSearch = this.fetchSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

updateSearch(event){
  this.setState({search : event.target.value});
  //get and Set the string, that the user is writing
}

  fetchSearch(str){

    let res = str.replace(/ /g, "%20");
    //The string received is fixed for the request variable

    let request = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${res}` ;

     axios.get(request)
     .then((response) => {
      this.setState({
        object: response.data,
        titles : response.data[1],
        description : response.data[2],
        links : response.data[3],
       })
    }).catch( (error) => {
      this.setState({ object: error})
  });
  }

  handleSubmit(e){
      e.preventDefault();
      let str = this.state.search;
      this.fetchSearch(str);
  }

  render(){
    const {object} = this.state;
    const titles = this.state.titles;

    return(
    <div>
      <div className="text-center " style= {{display : 'inline-block', width: '50%' }}>

        <div className = "form-group d-flex justify-content-start">
          <form onSubmit={this.handleSubmit} className = " form-inline mx-auto d-block">
            <h3 className= "mx-auto">WikipediaSearch:</h3>

            <input className="App-input"
            type = "text" value = {this.state.search}
            onChange = {this.updateSearch}/>

            <button type = "submit" className= "btn btn-light mt-1 "
            style= {{cursor : "pointer"}}> Search </button>
          </form>
        </div>
      </div>
    <div>
    {
      titles.map((title, i) =>
      <div className = "row" key={i}>
        <div className = "col-md-12">

           <div className="card-block mt-4">
            <a href ={this.state.links[i]} style ={{display: 'block'}} target="_blank">
              <h3 className="mb-2">{title}</h3>

            <p>{this.state.description[i]}</p>
            </a>

            </div>
          </div>
      </div>)

    }

    </div>
  </div>
    )
  }
}


class App extends Component {
  render() {
    return (

      <div className="App">
        <div  className = "container py-5 col-md-12 center">
          <div className = "row ">
            <header className="App-header">
              <h1 className="App-title">Wikipedia Viewer</h1>
              <Random/>
              </header>
            <div>
              <SearchBox/>
            </div>
         </div>
        </div>
      </div>

    );
  }
}

export default App;
