import { createStore } from 'redux';
import contactsReducer from '../reducers/contactsReducer';

export const store = createStore(contactsReducer);