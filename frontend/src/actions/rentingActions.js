import { FETCH_RENTING, ADD_RENTING, FILTER_RENTING, ITEM_RENTING } from './types';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


function getItemsforRental(dataArr) {
    var newData = []
    dataArr.forEach(data => {
        var object = {
            orderId: data.orderId,
            client: data.client,
            itemsId: data.itemId,
            itemQuantity: data.itemQuantity,
            spaces: data.spaces,
            slots: data.slots,
            pricePerWeek: data.pricePerWeek,
            LeaseEnd: data.LeaseEnd,
            status: data.status,
            location: data.loacation,
            items: [
                {
                    itemName: "Highschool PCs",
                    itemQuantity: 6
                },
                {
                    itemName: "Office PCs",
                    itemQuantity: 4
                },
                {
                    itemName: "Retail PCs",
                    itemQuantity: 3
                }
            ]
        }

        newData.push(object);
    })
    return newData;
}

export const fetchRenting = () => dispatch => {
    axios.get('https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/renting.json',
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then((packet) => {
            dispatch({
                type: FETCH_RENTING,
                payload: getItemsforRental(packet.data.rentals)
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
            var filterArr = packet.data.rentals;
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
