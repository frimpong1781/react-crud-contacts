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