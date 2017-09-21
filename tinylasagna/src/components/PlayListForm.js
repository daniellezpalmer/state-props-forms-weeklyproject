import React, {Component} from 'react';
import './styles/App.css';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);

      this.addToList = this.addToList.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
      this.handleArtist = this.handleArtist.bind(this);
      this.handleNotes = this.handleNotes.bind(this);

      this.state = {
        userName: '',
        songTitle: '',
        songArtist: '',
        songNotes: '',
      };

      addToList = (e) => {
          e.preventDefault();
          console.log(e.target);
          this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
          let listItem = JSON.stringify(this.state);
          console.log(listItem);
          fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        }
        ).then(response => {
          console.log(response, "yay");

        }).catch(err => {
          console.log(err, "boo!");
        });
        this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
      }

    handleName(e) {
      this.setState({userName: e.target.value});
    }
    handleTitle(e) {
      this.setState({songTitle: e.target.value});
    }
    handleArtist(e) {
      this.setState({songArtist: e.target.value});
    }
    handleNotes(e) {
      this.setState({songNotes: e.target.value});
    }
}

  render(){
    return(

    )
  }
}
