import {createStore, combineReducers} from 'react-redux';
import thunk from 'redux-thunk';
import {householdListReducer} from './reducers/householdReducers';



const initialState = {}
const reducer = combineReducers({
    householdList: householdListReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;
