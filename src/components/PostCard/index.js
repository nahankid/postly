import React from "react";

import AuthorInfo from "../AuthorInfo";

const PostCard = ({ post }) => {
  return (
    <div className="item">
      {false && <i className="huge user middle aligned icon" />}
      <div className="content">
        <h3 className="header">{post.title}</h3>
        <div className="description">{post.body}</div>
        <div>
          by <AuthorInfo id={post.userId} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
