import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input.js';

class App extends Component {
  render() {
    const url = 'https://api.edamam.com/search?q=chicken&app_id=5c4f25a2&app_key=d5ca218c0a52e2d593a48aca92c0e4e3&from=0&to=3&calories=591-722&health=alcohol-free';

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data.hits);
    });

    return (
      <div className="App">
        <Input/>
      </div>
    );
  }
}

export default App;
