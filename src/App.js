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
    }
    this.fetchSearch = this.fetchSearch.bind(this);
  }

updateSearch(event){
  this.setState({search : event.target.value});
  this.fetchSearch(this.state.search);
}

  fetchSearch(str){

    let res = str.replace(/ /g, "%20");
    let request = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${res}` ;
    //The request will receive several answers, It will display the answers and for every one it should open a new window if clicked


     axios.get(request)
     .then((response) => {
      this.setState({ object: response.data})
    }).catch( (error) => {
      this.setState({ object: error})

  });

  }

  render(){
    const {object} = this.state;
    return(
    <div>
      <div style= {{display : 'inline-block', width: '15%' }}>
        <h3>WikiViewer</h3>
        <input className="App-input"
        type = "text" value = {this.state.search}
        onChange = {this.updateSearch.bind(this)}/>
      </div>
      <QueryResolutions  wikiobject = {object} />
    </div>
    )
  }
}

class QueryResolutions extends Component {
  
  render() {
    const wikiobjects = this.props.wikiobject;


    if (wikiobjects){
      console.log(wikiobjects);
      }

    if (!this.props.wikiobject || this.props.wikiobject === undefined) {
    return (<div> ... No Information Available ... </div>)}

else {
  return (
  <div className = "Box">
  {

  }
  </div>
)}
}
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wikipedia Viewer</h1>
          <Random/>
        </header>
        <div>
          <SearchBox/>
        </div>
      </div>
    );
  }
}

export default App;
