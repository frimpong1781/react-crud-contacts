const initialState = {
    contacts: [
        {
          first_name: "James",
          last_name: "Frimpong",
          middle_name: "Kwame",
          phone_number: '0244626767',
          address: "Box Mc 1582, Takoradi",
          email: "jfrimpong@yahoo.com",
          type: "Friend",
          id: "hhfttfjj"
        },
        {
          first_name: "Princess",
          last_name: "Mensah",
          middle_name: "Linda",
          phone_number: '0244626767',
          address: "Box Mc 1582, Takoradi",
          email: "jfrimpong@yahoo.com",
          type: "Friend",
          id: "hhfjjjhuh"
        },
        {
          first_name: "James",
          last_name: "Frimpong",
          middle_name: "Kwame",
          phone_number: '0244626767',
          address: "Box Mc 1582, Takoradi",
          email: "jfrimpong@yahoo.com",
          type: "Friend",
          id: "uuui"
        }
      ],
};

// Use the initialState as a default value
const contactsReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "ADD_CONTACT":
        console.log(action.payload)
        return {...state, contacts: [...state.contacts, action.payload]};
  
    default:
          // If this reducer doesn't recognize the action type, or doesn't
          // care about this specific action, return the existing state unchanged
      return state;
  }
}

export default contactsReducer;