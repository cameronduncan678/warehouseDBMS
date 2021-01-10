import { FETCH_ITEMS } from './types';
import axios from 'axios';
import { dispatch } from 'd3';

const dummy = "https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/items.json";
const localhost = 'http://localhost:5555/items';

export const fetchItems = (itemId) => dispatch => {
    axios.get(dummy,
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_ITEMS,
                payload: packet.data.items
            })
        })
}

export const addItem = (itemObj) => dispatch => {
    axios.post(localhost, itemObj, { headers: { "Access-Control-Allow-Origin": "*" } });
}

export const deleteItems = (itemId) => dispatch => {
    axios.delete(localhost + `/${itemId}`, { headers: { "Access-Control-Allow-Origin": "*" } });
}