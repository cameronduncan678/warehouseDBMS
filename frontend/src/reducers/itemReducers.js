import { FETCH_ITEMS } from '../actions/types';

const initialState = {
    data: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}