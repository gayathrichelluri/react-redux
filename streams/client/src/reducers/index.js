import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {streamReducer} from './streamReducer';
import {reducer} from 'redux-form';

export  default combineReducers({
  auth: authReducer,
  streams: streamReducer,
  form: reducer
});
