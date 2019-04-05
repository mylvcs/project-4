// /• Users also have a view that shows them what are the songs/playlists they have voted/commented on

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
   
  render() {
    return (
      <div className=" primary-color border rounded">
        
        <div className="row d-flex pt-4 justify-content-center">

        <h1>Songs you commented </h1>

        <h1>Songs you upvoted </h1>
        </div>
      </div>
    );
  }



}