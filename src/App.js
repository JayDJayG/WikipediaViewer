import React, { Component } from 'react';
import './App.css';


class SearchBox extends Component {
  constructor(){
    super();
      this.state = {
        search : ""
    };
  }

updateSearch(event){
  this.setState({search : event.target.value});
  console.log(  this.state.search);
}

  render(){
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


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wikipedia Viewer</h1>
        </header>
        <div>
          <SearchBox/>
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
