import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input.js';
import Output from './components/output.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {q:''}
    this.handleParameter = this.handleParameter.bind(this);
    this.createOutput = this.createOutput.bind(this);
  }

  handleParameter(e){
    this.setState({q:e});
  }

  createOutput(){
    var rows = [];
    rows.push(<Output label='test' url='test' key='23'/>);
    const url = 'https://api.edamam.com/search?q='+ this.state.q +'&app_id=5c4f25a2&app_key=d5ca218c0a52e2d593a48aca92c0e4e3&from=0&to=3&calories=591-722&health=alcohol-free';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      for(var i=0; i<data.hits.length; i++){
        var temp = data.hits[i]['recipe'];
        rows.push(<Output label={temp['label']} url={temp['url']} />);
      }
      console.log(rows);
    });
    return rows;
  }

  render() {  
    return (
      <div className="App">
        <Input params={this.handleParameter}/>
        {this.createOutput()}
      </div>
    );
  }
}

export default App;
