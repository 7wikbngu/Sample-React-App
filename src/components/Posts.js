import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/fetchPostAction';

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();    // Call Action
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        let postItems;
        console.log(this.props.posts);
        if(this.props.posts !== undefined) {
            postItems = this.props.posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ));
        } else {
            postItems = (
                <h1> No Posts </h1>
            )
        }
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
    newPost: PropTypes.object
};

const mapStatetoProps = state => ({
    posts: state.fetchPosts.items,
    newPost: state.createPost.item
});

export default connect(mapStatetoProps, { fetchPosts })(Posts);

