import { FETCH_REPORTS, LATEST_REPORT } from '../actions/types';

const initailState = {
    data: [],
    dat: {}
};

export default function (state = initailState, action) {
    switch (action.type) {
        case FETCH_REPORTS:
            return {
                ...state,
                data: action.payload,
                dat: {
                    reportTitle: '',
                    reportDate: '',
                    reportAuthor: '',
                    reportText: ''
                }
            };
        case LATEST_REPORT:
            return {
                ...state,
                dat: action.payload
            }
        default:
            return state;
    };
};