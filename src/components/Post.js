import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    return (
      <dl>
        <dt>{this.props.post.title}</dt>
        <dt>{this.props.post.content}</dt>
      </dl>
    )
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  })
};

export default Post;