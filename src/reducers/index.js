import { combineReducers } from 'redux';
import createPost from './createPostReducer';
import fetchPosts from './fetchPostsReducer';

export default combineReducers({
    fetchPosts,
    createPost
});