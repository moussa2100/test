import {combineReducers} from 'redux';
import authReducer from './authreducer';
import projectreducer from './projectreducer';

const rootreducer = combineReducers({

    auth: authReducer,
    project : projectreducer,

})

export default rootreducer;