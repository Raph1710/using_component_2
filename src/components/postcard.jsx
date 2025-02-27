// PostCard.js
import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
      <img src={post.profileImage} alt={`${post.username}'s profile`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <h2>{post.username}</h2>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} />
    </div>
  );
};

export default PostCard;
