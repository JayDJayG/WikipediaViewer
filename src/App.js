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
  //this.fetchSearch(this.state.search);
}

  fetchSearch(str){

    let res = str.replace(/ /g, "%20");
    let request = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${res}` ;
    //The request will receive several answers, It will display the answers and for every one it should open a new window if clicked


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
    const description = this.state.description;
    const links = this.state.links;

    return(
    <div>
      <div className="text-center" style= {{display : 'inline-block', width: '15%' }}>

        <div className = "form-group">
          <form onSubmit={this.handleSubmit} className = "form-inline mx-auto d-block">
            <h3>WikipediaSearch: </h3>

            <input className="App-input"
            type = "text" value = {this.state.search}
            onChange = {this.updateSearch}/>

            <button type = "submit" className= "btn btn-light mt-1 "
            style= {{cursor : "pointer"}}> Search </button>
          </form>
        </div>
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
  <div className = "row">
    <div className = "col-md-12">
      <div className="card-block mt-4">
        <div className = "">

          <h3 className="mb-2">Hola mundo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis erat sit amet fermentum suscipit. Maecenas imperdiet nulla quam, ut pellentesque velit ultrices sed. Quisque eleifend condimentum nisi vel egestas. Sed sollicitudin, leo ac commodo ultricies, quam turpis luctus turpis, eget tincidunt eros turpis vel velit. Duis ultricies tortor vitae porttitor malesuada. Phasellus a elit porttitor, tristique justo eu, fermentum nunc. Curabitur ac efficitur felis. Sed ac diam ac diam fringilla tincidunt et et lectus. Duis sodales vel urna semper placerat. Quisque suscipit scelerisque libero at pretium. Quisque viverra elit et lectus mollis, et facilisis arcu tristique. Nunc tincidunt lobortis diam, vel pellentesque purus imperdiet et. Maecenas est augue, porttitor sed nibh ut, tincidunt porta mauris. Quisque vel consectetur nibh. Mauris eu felis lorem.</p>

        </div>
      </div>
    </div>
  </div>

)}
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
