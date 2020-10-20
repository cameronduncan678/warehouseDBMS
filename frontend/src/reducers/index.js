import { combineReducers } from 'redux';
import rentingReducers from './rentingReducers';
import locationReducers from './locationReducers';
import itemReducers from './itemReducers';

export default combineReducers({
    rentings: rentingReducers,
    locations: locationReducers,
    items: itemReducers
});