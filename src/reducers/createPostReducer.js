import { NEW_POST } from '../actions/types';

// const initialState = {
//     items: [],
//     item: {}
// }

export default function(state = {}, action) {
    switch(action.type) {
        case NEW_POST:
            console.log("State:", state);
            return {
                ...state,
                item: action.payload
            };

        default:
            return state;
    }
}