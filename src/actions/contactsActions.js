// Action creator for adding user
// This function accept the new user we'll be adding
// Since this function would be used outside of this file, we need to export it as a named export

export const addContact = (newContact) => {
    newContact.id=Math.random().toString()
    return {
        type: "ADD_CONTACT",
        payload: newContact
    }
}

// Action creator for deleting contact
export const deleteContact = (contactId) => {
    return {
        type: "DELETE_CONTACT",
        payload: contactId
    }
}

// Action creator for editing contact
export const editContact = (updatedContact) => {
    return {
        type: "EDIT_CONTACT",
        payload: updatedContact
    }
}