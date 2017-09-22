import React, {Component} from 'react';
import '../styles/App.css';
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);

    this.state = {
      songs: []
    }
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log(data);
    })
  }

  render() {
    let btnStyle = {
      fontFamily:"Amatic SC",
      fontSize: 25,
      borderRadius: 4,
      borderStyle:"dotted",
      borderColor:"#4e5157",
      color:"#4e5157",
      backgroundColor:"#ffd9f4",
      margin:"10px"
    }

    return (
      <div>
        <button style={btnStyle} onClick={this.fetchData}>Update</button>
        <PlayListItem arr={this.state.songs}/>
      </div>
    )
  }
}
