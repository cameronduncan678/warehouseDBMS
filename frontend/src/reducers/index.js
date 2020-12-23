import { combineReducers } from 'redux';
import rentingReducers from './rentingReducers';
import locationReducers from './locationReducers';
import itemReducers from './itemReducers';
import reportsReducers from './reportsReducers';
import userReducer from './userReducer';

export default combineReducers({
    rentings: rentingReducers,
    locations: locationReducers,
    items: itemReducers,
    reports: reportsReducers,
    user: userReducer
});