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
import queryString from 'query-string';


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

let fakeServerData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      }
    ]
  }
};

export default class List extends Component {
	constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
	}
	

	componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => this.setState({
      user: {
        name: data.display_name
      }
    }))

    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => this.setState({
      playlists: data.items.map(item => {
        console.log(data.items)
        return {
          name: item.name,
          imageUrl: item.images[0].url, 
          songs: []
        }
    })
    }))

  }
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
          <h1 >
            {/* {this.state.user.name}'s Playlists */}
          </h1>
         {/* <PlaylistCounter playlists={playlistToRender}/> */}
          {/* <HoursCounter playlists={playlistToRender}/> */}
          {/* <Filter onTextChange={text => {
              this.setState({filterString: text})
            }}/> */}

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



