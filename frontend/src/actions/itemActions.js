import { FETCH_ITEMS } from './types';
import axios from 'axios';

export const fetchItems = (itemId) => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/items.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_ITEMS,
                payload: packet.data.items
            })
        })
}