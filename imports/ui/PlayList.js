import React, {Component} from 'react';
//TODO

export default class PlayList extends Component{
	render(){
		let playlist = this.props.playlist
		return (
			<div style= {{...defaultStyle, display: 'inline-block', width:"25%"}}>
				<img src = {playlist.imageUrl}  style = {{width: '60px'}} />
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