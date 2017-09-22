import React, {Component} from 'react';
import '../styles/App.css';

export default class PlayListItem extends Component {

  render() {
    let songsArray = this.props.arr;
    console.log('what is songsArray', songsArray);

    let songStyle = {
      display:"flex",
      borderStyle:"solid",
      borderColor:"grey",
      margin: 20,
      justifyContent:"space-between",
      padding:"0px 10px 0px 10px"
    }


    let songs = songsArray.map((song, index) => {
      return (
        <div style={songStyle} key={index}>
          <div>User: {song.userName}</div> |||
          <br></br>
          <div>Title: {song.songTitle}</div> |||
          <br></br>
          <div>Artists: {song.songArtist}</div> |||
          <br></br>
          <div>Notes: {song.songNotes}</div>
        </div>
      );
    });

    return (
      <div className="songsContainer">
        {songs}
      </div>
    );
  }
}
