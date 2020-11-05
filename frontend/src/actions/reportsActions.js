import axios from 'axios';
import { FETCH_REPORTS, LATEST_REPORT } from './types';

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

export const fetchLatestReports = () => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/reports.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: LATEST_REPORT,
                payload: packet.data[0]
            })
        });
};