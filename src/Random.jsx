import React, { Component } from 'react';
import './App.css';


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
    <button style = {{top : "1px" , position : "relative", color: "white", color: "black"}} onClick={this.handleButtonClick.bind(this)}>
          Random
        </button>
    </div>
  );
  }
}
export default Random;
