import { NEW_POST } from './types';

export const createPost = (postData) => dispatch => {
    console.log("Action called");
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        })
    );
};