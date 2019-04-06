import React, { Component } from "react";
import { Meteor } from "meteor/meteor";



export default class LoginWithSpotify extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	
    };

  }
  signUp(){
    var options = {
    showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
    requestPermissions: ['user-read-email'] // Spotify access scopes.
  };
  Meteor.loginWithSpotify(options, function(err) {
    console.log(err || "No error");
  });
  //https://accounts.spotify.com/authorize?client_id=40a25c6162004edd9a4eac59e6fad904&response_type=code&redirect_uri=http://localhost:3000/callback/&scope=user-read-private%20user-read-email&state=34fFs29kd09

    console.log(Meteor.user());
  }

  	render() {
    return (


      <div id = "loginWithSpotify">
   
      <button onClick = {this.signUp}> Login with spotify </button>
        
      </div>
    );
  }
}