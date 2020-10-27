import { FETCH_REPORTS } from '../actions/types';

const initailState = {
    data: []
};

export default function (state = initailState, action) {
    switch (action.type) {
        case FETCH_REPORTS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    };
};