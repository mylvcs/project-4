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


class App extends Component {

	render() {
		return (
			<div id = "app">
					<Container>
						<Header />

						<br />
						
						{
							Meteor.user() ? 

							<Music />
							: 
							<HomePage />

						}

						<LoginWithTwitter />
							
						<LoginWithSpotify />
						<br />
					
						<Footer />
						<br />
				
					</Container>
			</div>
		);
	}
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(App);