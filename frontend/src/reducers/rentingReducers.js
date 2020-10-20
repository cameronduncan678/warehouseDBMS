import { FETCH_RENTING } from '../actions/types';

const initialState = {
    data: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RENTING:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    };
};