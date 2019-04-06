
import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Button } from 'semantic-ui-react';

export default class Music extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	
    };
  }


  searchSong(e) {
	    e.preventDefault();

	   

	  }

	searchAlbum(e) {
	    e.preventDefault();

	   

	  }

  	render() {
			console.log(Meteor.user());

    return (
	

      <div className=" primary-color border rounded">
        
        <div className="row d-flex pt-4 justify-content-center">
        	<h1>
        		Search the song you want to comment?
        	</h1>
					<div>
				
				</div>
			<form>
			  <label>
			    Name:
			    <input type="text" id="searchSong" name="text" placeholder="name of the song" />
			  </label>
			  <Button
		            onClick={this.searchSong.bind(this)}
		          >
		          Search
		      </Button>
			</form>
			<h1>
        		Search the album you want to comment?
        	</h1>       
        	<form>
			  <label>
			    Name:
			    <input type="text" id="searchAlbum" name="text" placeholder="name of the album" />
			  </label>
			  <Button
		            onClick={this.searchAlbum.bind(this)}
		          >
		          Search
		      </Button>
			</form> 	

        </div>
      </div>
    );
  }



}