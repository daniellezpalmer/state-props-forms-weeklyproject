import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListItem from './PlayListItem.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayList />
        <PlayListForm />
      </div>
    );
  }
}

export default App;
