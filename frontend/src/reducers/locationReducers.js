import { FETCH_LOCATIONS } from '../actions/types';

const initialState = {
    data: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}