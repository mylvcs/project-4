// /• Users also have a view that shows them what are the songs/playlists they have voted/commented on
//list for user himself
import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Button } from 'semantic-ui-react';

UpVotedLists = new Meteor.Collection("Upvoted");
DownVotedLists= new Meteor.Collection("Downvoted");
commentedLists = new Meteor.Collection("commentedLists");

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