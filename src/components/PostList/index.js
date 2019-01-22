import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PostCard from "../PostCard";
import { fetchPosts } from "./actions";
import { makeSelectPosts } from "./selector";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList = () => {
    const { loading, error, posts } = this.props.postListReducer;

    if (loading) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          {error.map(e => (
            <p key={e}>{e}</p>
          ))}
        </div>
      );
    }

    if (posts) {
      return (
        <div className="ui relaxed divided list">
          {posts.map(p => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      );
    }
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  postListReducer: makeSelectPosts()
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
