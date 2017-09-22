import React, {Component} from 'react';

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
      songNotes: ''
    };
  }
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
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
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

  render() {

    let form = {
      display:"flex",
      justifyContent:"center"
    }

    let laput = {
      borderStyle:"solid",
      borderColor:"grey",
      padding: 10,
      margin: 10
    }

    let input = {
      fontFamily:"Amatic SC",
      fontSize: 25,
      borderRadius: 4,
      borderStyle:"dotted",
      color:"#ffd9f4",
      borderColor:"#ffd9f4",
      backgroundColor:"#4e5157"
    }

    let submit = {
      fontFamily:"Amatic SC",
      fontSize: 25,
      borderRadius: 4,
      borderStyle:"dotted",
      borderColor:"#4e5157",
      color:"#4e5157",
      backgroundColor:"#ffd9f4",
      height: 40,
      alignSelf:"center"
    }

    return (
      <div>
        <form onSubmit={this.addToList}>
          <div style={form}>
          <div style={laput}>
          <label>User Name:</label>
          <br></br>
          <input type='text' style={input} value={this.state.userName} onChange={this.handleName}></input>
          <br></br>
          </div>
          <div style={laput}>
          <label>Song Title:</label>
          <br></br>
          <input type='text' style={input} value={this.state.songTitle} onChange={this.handleTitle}></input>
          <br></br>
          </div>
          <div style={laput}>
          <label>Artist/Band:</label>
          <br></br>
          <input type='text' style={input} value={this.state.songArtist} onChange={this.handleArtist}></input>
          <br></br>
          </div>
          <div style={laput}>
          <label>Notes About Song:</label>
          <br></br>
          <textarea style={input} value={this.state.songNotes} onChange={this.handleNotes}></textarea>
          <br></br>
          </div>
        </div>
          <input type='submit' style={submit}></input>
        </form>
      </div>
    );
  }
}
