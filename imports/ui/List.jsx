import React, { Component }from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import HomePage from "./HomePage.js";
import Music from "./Music.js";
import { Container } from "semantic-ui-react";
import "../style/app.css";
import LoginWithTwitter from "./LoginWithTwitter";
import LoginWithSpotify from "./LoginWithSpotify";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";


class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img src={playlist.imageUrl} style={{width: '60px'}}/>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song => 
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
	}
}
export default class List extends Component {

	render() {
		let playlistToRender = 
		this.state.user && 
		this.state.playlists 
			? this.state.playlists.filter(playlist => 
				playlist.name.toLowerCase().includes(
					this.state.filterString.toLowerCase())) 
			: []
		return (
			<div className = "List">
					
					 <h1>Here is user's list</h1>
					 
        		<div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists={playlistToRender}/>
          <HoursCounter playlists={playlistToRender}/>
          <Filter onTextChange={text => {
              this.setState({filterString: text})
            }}/>

          {playlistToRender.map(playlist => 
            <Playlist playlist={playlist} />
					)}

			</div>

			</div>
		)
	}
}

// export default withTracker(() => {
//   return {
//     user: Meteor.user()
//   };
// })(List);



