import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Button } from 'semantic-ui-react';

//show the genres, artist and album info about the song 
//so this page is rendered after the user clicked on the music search component
export default class Song extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	
    };
}

  	render() {
    return (
      <div className="primary-color border rounded">
        
        <div className="row d-flex pt-4 justify-content-center">
        <h1>Song's name </h1>
            <div>song's genres </div>
            <div>song's artist </div>
            <div>song's album </div>
			<a href= "song ID">
			  <Button> upvote  </Button>
              <Button> downvote </Button>
            </a>
		
        <h1> Comments </h1>
        {/* here only shows the most recent 5 comments, if want to see more 
        click load more , and show more comments */}

            

        </div>
      </div>
    );
  }
}
