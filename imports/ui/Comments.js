import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
Comments = new Meteor.Collection('comments');

Comments.allow({
  insert: function (userId, doc) {
    return true;
  }
});


Template.comments.onCreated(function () {
  this.error = new ReactiveVar('');
  this.songId = new ReactiveVar(Template.instance().data._id);
  Meteor.subscribe('post-comments', this.postId.curValue);
});

Template.comments.helpers({
  comments: function() {
    var songId = Template.instance().songId.get();
    return Comments.find( {songId: songId}, {sort: {publishedOn: -1} } );
  },
  error: function() {
    return Template.instance().error.get();
  }
});

Template.comments.events({
  "submit form": function(event) {
    event.preventDefault();
    var songId = Template.instance().songId.get();
    var comment = $('textarea[name=comment').val();
    var comment = comment.replace(/\n/g, '<br />');
    var authorName = $('input[name=name').val();
    Comments.insert({songId: songId, authorName: authorName, comment: comment});
    document.getElementById("comment").reset();
  }
});
