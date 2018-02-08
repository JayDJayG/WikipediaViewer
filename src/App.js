import React, { Component } from 'react';
import './App.css';

class SearchBox extends Component {
  render(){
    return(
      <div style= {{display : 'inline-block', width: '15%' }}>
      <h3>WikiViewer</h3>
      <input className="App-input" type = "text"/>

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
