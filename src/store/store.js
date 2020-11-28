import { createStore, combineReducers } from 'redux';
import contactsReducer from '../reducers/contactsReducer';
import authReducer from '../reducers/authReducer';

// for creating single reducer, use the below code
// export const store = createStore(contactsReducer);

// Use code below when creating multiples reducers
export const store = createStore(
    combineReducers({
        contactsState: contactsReducer,
        auth: authReducer
    })
)