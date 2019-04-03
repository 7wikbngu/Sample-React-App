import { FETCH_POSTS } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log("State:", state);
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
}