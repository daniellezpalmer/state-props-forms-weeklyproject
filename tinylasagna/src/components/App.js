import React, {Component} from 'react';
import '../styles/App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';

class App extends Component {
  render() {

    let wholeShebang = {
      fontFamily:"Amatic SC",
      fontSize: 40,
      color:"lavender",
      backgroundColor:"#4e5157",
      padding: 20
    }

    return (
      <div className="App" style={wholeShebang}>
        <NavBar/>
        <PlayListForm/>
        <PlayList/>
      </div>
    );
  }
}

export default App;
