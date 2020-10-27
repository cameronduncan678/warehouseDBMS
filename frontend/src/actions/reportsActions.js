import axios from 'axios';
import { FETCH_REPORTS } from './types';

export const fetchReports = () => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/reports.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_REPORTS,
                payload: packet.data
            })
        });
};