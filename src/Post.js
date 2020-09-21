import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar"></Avatar>
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt=""></img>
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUp></ThumbUp>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline></ChatBubbleOutline>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe></NearMe>
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon></AccountCircleIcon>
          <ExpandMoreOutlined></ExpandMoreOutlined>
        </div>
      </div>
    </div>
  );
}

export default Post;
