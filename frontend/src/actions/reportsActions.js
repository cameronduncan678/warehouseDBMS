import axios from 'axios';
import { FETCH_REPORTS, LATEST_REPORT } from './types';

var dummy = 'https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/reports.json';
var localhost = 'http://localhost:5555/reports';

export const fetchReports = () => dispatch => {
    axios.get(localhost,
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_REPORTS,
                payload: packet.data
            })
        });
};

export const fetchLatestReports = () => dispatch => {
    axios.get(localhost,
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: LATEST_REPORT,
                payload: packet.data[0]
            })
        });
};