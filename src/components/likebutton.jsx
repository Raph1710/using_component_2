import React, { useState } from 'react';

const LikeButton = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={handleLike}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;