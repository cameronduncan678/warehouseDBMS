import { FETCH_USER } from '../actions/types';

const initailState = {
    data: {
        firstName: 'Cameron',
        lastName: 'Duncan'
    },
};

export default function (state = initailState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;

    };
};