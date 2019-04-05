import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import "../imports/startup/accounts-config.js";
import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import './main.html'

Template.upvote.onCreated(function UpVoteOnCreated(){
  //upcounter starts at 0
  this.upcounter = new ReactiveVar(0);

});

Template.upvote.helpers({
  counter(){
    return Template.instance().upcounter.get();
  },
})

Template.upvote.events({
  'click button'(event, instance){
    //increment the counter when button is clicked
    instance.upcounter.set(instance.upcounter.get() + 1);
  }

});


Template.downvote.onCreated(function DownVoteOnCreated(){
  //counter starts at 0
  this.downcounter = new ReactiveVar(0);

});

Template.downvote.helpers({
  counter(){
    return Template.instance().downcounter.get();
  },
})

Template.downvote.events({
  'click button'(event, instance){
    //increment the counter when button is clicked
    instance.downcounter.set(instance.downcounter.get() + 1);
  }
});

Meteor.startup(() => {
 // render(<App />, document.getElementById('react-target'));
  render(<List />, document.getElementById('react-target-list'));
});