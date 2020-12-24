import axios from 'axios';

const dummy = "https://s3-eu-west-1.amazonaws.com/warehouse.data.placeholder/items.json";
const localhost = 'http://localhost:5555/targets';

export const updateTargets = (targetObj) => dispatch => {
    axios.put(localhost + `/${targetObj.locationId}`, targetObj, { headers: { "Access-Control-Allow-Origin": "*" } });
}