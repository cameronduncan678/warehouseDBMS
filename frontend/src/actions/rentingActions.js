import { FETCH_RENTING } from './types';
import axios from 'axios';

// For testing purpose only
// var dummy = {
//     orderId: '2cf967b409e64ac1a02fc179c8d6a2e8',
//     client: 'Angnes Chazhopla',
//     itemsId: 'c33bceff32b04afb836a8e74f57d0314',
//     itemQuantity: 4,
//     spaces: 4,
//     slots: 0,
//     pricePerWeek: 800,
//     LeaseEnd: '09/11/2020',
//     status: 'storage',
//     location: 'newcastle'
// };

export const fetchRenting = () => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/renting.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_RENTING,
                payload: packet.data.rentals
            })
        })
};