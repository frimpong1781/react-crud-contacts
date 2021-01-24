import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import contactsReducer from '../reducers/contactsReducer';
import authReducer from '../reducers/authReducer';

// New imports
import firebaseObj from '../firebase/firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

// for creating single reducer, use the below code
// export const store = createStore(contactsReducer);

// Allows as to combine multiple reducers and pass it to the store
const reducers = combineReducers({
    contactsState: contactsReducer,
    auth: authReducer
});

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebaseObj),
        reduxFirestore(firebaseObj)
    )
);