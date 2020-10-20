import { FETCH_LOCATIONS } from './types';
import axios from 'axios';

export const fetchLocations = () => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/locations.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_LOCATIONS,
                payload: packet.data.locations
            })
        })
}