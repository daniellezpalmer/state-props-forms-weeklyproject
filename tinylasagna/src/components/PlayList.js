import React, {Component} from 'react';
import './styles/App.css';
import PlayListItem from './PlayListItem';

export default class PlayList extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);

    this.state = {
      songs: [];
    }
  }

  componentDidMount() {
    fetchData(e) {
     e.preventDefault();
     fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
       return results.json();
     }).then(data => {
       this.setState({songs: data});
     })
    }
  }

  render(){
    return(

    )
  }
}
