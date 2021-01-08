import { FETCH_RENTING, ADD_RENTING, FILTER_RENTING, ITEM_RENTING, FETCH_RENTING_ID } from './types';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { dispatch } from 'd3';

var dummy = 'https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/renting.json';
var localhost = 'http://localhost:5555/renting';

export const fetchRenting = () => dispatch => {
    axios.get(localhost,
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_RENTING,
                payload: packet.data
            })
        })
};

export const fetchRentingById = (id) => dispatch => {
    axios.get(localhost + `/${id}`,
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_RENTING_ID,
                payload: packet.data
            })
        })
}

//Data Object recieved from app
// {
//     LeaseEnd: "2021-03-19"
//     client: "Nathan Nelson"
//     itemQuantity: 1
//     items: Array(1)[
//     {
//         amount: 10
//         itemName: "Industrial Laptops"
//         pricePerWeek: 1000
//     }
// ]
//     
//     location: "aberdeen"
//     pricePerWeek: 1000
//     slots: 2
//     spaces: 0
//     status: "storage"
// }

export const addRenting = (newData) => dispatch => {
    axios.post(localhost, newData, { headers: { "Access-Control-Allow-Origin": "*" } })
}

export const filterRenting = (filterObj) => dispatch => {
    axios.get(localhost,
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {

            var filterArr = packet.data;

            if (filterObj.orderId) {
                filterArr.forEach(data => {
                    if (data.orderId === filterObj.orderId) {
                        filterArr = [data];
                    }
                })
            }

            if (filterObj.status && filterObj.status !== "none") {
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

export const itemRenting = (itemId) => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/renting.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            var filterArr = packet.data;
            var renting = [];
            if (itemId) {
                filterArr.forEach(item => {
                    if (item.itemsId === itemId) {
                        renting.push(item);
                    }
                })
            }

            dispatch({
                type: ITEM_RENTING,
                payload: renting
            })
        })
}
