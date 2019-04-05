import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

var options = {
    showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
    requestPermissions: ['user-read-email'] // Spotify access scopes.
  };
  Meteor.loginWithSpotify(options, function(err) {
    console.log(err || "No error");
  });


export default class LoginWithSpotify extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	
    };

  }
  
  	render() {
    return (
      <div id = "loginWithSpotify">
   
      <button> Login with spotify </button>
        
      </div>
    );
  }
}