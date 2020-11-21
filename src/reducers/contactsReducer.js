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

const contactsReducer = (state = {initialState}, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
        return state;
  
    default:
      return state;
  }
}

export default contactsReducer;