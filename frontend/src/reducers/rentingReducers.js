import { FETCH_RENTING, ADD_RENTING, FILTER_RENTING, FETCH_RENTING_ID } from '../actions/types';

const initialState = {
    data: [],
    dat: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RENTING:
            return {
                ...state,
                data: action.payload
            };
        case ADD_RENTING:
            return {
                ...state,
                data: action.payload
            }
        case FILTER_RENTING:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_RENTING_ID:
            return {
                ...state,
                dat: action.payload
            }
        default:
            return state;
    };
};