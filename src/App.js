import React, { Component } from 'react';
import './App.css';

//git config --global core.autocrlf true

class SearchBox extends Component {
  constructor(){
    super();
      this.state = {
        search : "",
        object : {},
    }
    this.fetchSearch = this.fetchSearch.bind(this);
  }

updateSearch(event){
  this.setState({search : event.target.value});
  this.fetchSearch(this.state.search);
}

  fetchSearch(str){

    const arr = [];
    let res = str.replace(/ /g, "%20");
    let request = "https://en.wikipedia.org/api/rest_v1/page/related/" + res;
//I will receive 5 answers, I will display the 5 answers and for every one it should open a new window if clicked
    fetch(request)
     .then(response => response.json())
     .then(data => this.setState({ object: data})).catch(err => console.log('ERROR', err));

     if (this.state.object.pages){
       for (let page of this.state.object.pages){
            arr.push(page);
       }
     }
  }

  render(){
    if(this.arr)console.log("True");

    //Lo dejaste aqui!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return(
      <div style= {{display : 'inline-block', width: '15%' }}>
        <h3>WikiViewer</h3>
        <input className="App-input"
        type = "text" value = {this.state.search}
        onChange = {this.updateSearch.bind(this)}/>
      </div>

    )
  }
}

class QueryResolutions extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className = "Box">
          <h3>Title</h3>
          <p>lorem ipsum </p>
        </div>
      </div>
    )
  }
}

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri : {},
    }

  }

  //Getting an object since the very start of the app
  componentDidMount() {

    const randomRequest = "https://en.wikipedia.org/api/rest_v1/page/random/title";

       fetch(randomRequest)
        .then(response => response.json())
        .then(data => this.setState({ uri: data.items})).catch(err => console.log('ERROR', err));

        this.openWindow(this.state.uri[0]);

     }

     //New window with a random Wikipedia page
     openWindow(obj){
       let objTarget = obj;
       if (objTarget) window.open('https://en.wikipedia.org/wiki/' +objTarget.title) ;
     }


  handleButtonClick() {
  this.componentDidMount();
}

  render(){
    return(
    <div>
    <button style = {{top : "7px" , position : "relative"}} onClick={this.handleButtonClick.bind(this)}>
          Random
        </button>
    </div>
  );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wikipedia Viewer</h1>
        </header>
        <div>
          <SearchBox/>
          <Random/>
          <p></p>
          <QueryResolutions/>
          <p></p>
          <QueryResolutions/>
        </div>
      </div>
    );
  }
}

export default App;
