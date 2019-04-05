//user submit comments here
//怎么确定评论到那首歌下面了。这个数据库是怎么连接的

import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Button } from 'semantic-ui-react';
import { Session } from "inspector";

Comment = new Meteor.Collection("comment");

var commentfortheSong = Comment.find({SongId: Session.get('songId')}).fetch();

export default class Comment extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	
    };
  }
   
  render() {
    return (
      <div id = "comment">
        <h3><strong>Your Comment:</strong></h3>
          
     <input type="text" name="" id="comm_title" class="text"> </input>
        <p><span>Content：</span><textarea rows="10" id="content" cols="30" class="text-textarea"></textarea>
        </p>
     <p style="text-align:right;"><button class="btn">submit</button></p>
        

        
 
      </div>
    );
  }
}

//   var Comment = function() {

  
//   $('btn').click(function (){
//       var content = $('#content').val();
//       var url = "{:U('Content/comment')}";
//       if (content == ""){
//           alert('nothing you comment');
//           return false;
//       }
//       var art_id = "{$artInfo.art_id}";
//       $.get(url, {'art_id':art_id, 'comm_content': content}, this.function(data){
//           //收到的评论放在下面
//           $('#comment').after(data);
//       })
//   })
  
