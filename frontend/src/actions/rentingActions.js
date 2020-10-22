import { FETCH_RENTING, ADD_RENTING, FILTER_RENTING } from './types';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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

//Object from Add Data rollout
// data = {
//     LeaseEnd: "",
//     client: "",
//     items: [
//         {
//             amount: 0,
//             itemName: "",
//             pricePerWeek: 0
//         }
//     ],
//     location: ""
// }

export const addRenting = (newData) => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/renting.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            var dataArr = packet.data.rentals;
            newData.orderId = uuidv4();
            dataArr.unshift(newData);
            dispatch({
                type: ADD_RENTING,
                payload: dataArr
            })
        })
}

export const filterRenting = (filterObj) => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/renting.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {

            var filterArr = packet.data.rentals;

            if (filterObj.orderId) {
                filterArr.forEach(data => {
                    if (data.orderId === filterObj.orderId) {
                        filterArr = [data];
                    }
                })
            }

            if (filterObj.status) {
                var newStatus = [];
                filterArr.forEach(data => {
                    if (data.status === filterObj.status) {
                        newStatus.push(data);
                    }
                })

                filterArr = newStatus;
            }

            if (filterObj.location) {
                var newLocation = [];
                filterArr.forEach(data => {
                    if (data.location === filterObj.location) {
                        newLocation.push(data);
                    }
                })

                filterArr = newLocation;
            }

            dispatch({
                type: FILTER_RENTING,
                payload: filterArr
            })
        });
}
