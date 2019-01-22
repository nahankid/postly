import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchUser } from "./actions";
import { makeSelectAuthorInfo } from "./selectors";

class AuthorInfo extends Component {
  componentDidMount() {
    const { fetchUser, id } = this.props;

    if (fetchUser && id) {
      fetchUser(id);
    }
  }

  renderUser = () => {
    const { loading, error, users } = this.props.authorInfoReducer;

    if (loading) {
      return <div className="ui active inline mini loader" />;
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

    if (users && users[this.props.id]) {
      return <Fragment>{users[this.props.id].name}</Fragment>;
    }

    return null;
  };

  render() {
    return <Fragment>{this.renderUser()}</Fragment>;
  }
}

const mapStateToProps = createStructuredSelector({
  authorInfoReducer: makeSelectAuthorInfo()
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(AuthorInfo);
