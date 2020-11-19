import { FETCH_LOCATIONS } from './types';
import axios from 'axios';

var dummy = 'https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/renting.json';
var localhost = 'http://localhost:5555/location';

export const fetchLocations = () => dispatch => {
    axios.get(localhost,
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_LOCATIONS,
                payload: packet.data
            })
            console.log(packet.data);
        })
}

export const updateLocationTargets = (targetObj) => dispatch => {
    console.log(targetObj);
}