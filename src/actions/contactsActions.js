// Action creator for adding user
// This function accept the new user we'll be adding
// Since this function would be used outside of this file, we need to export it as a named export

export const addContact = (newContact) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore
      .collection("contacts")
      .add(newContact)
      .then((res) => {
        console.log("Contact added successfully!", newContact);
      })
      .catch((err) => console.log("An error occured!", err));
    };
};

// Action creator for deleting contact
export const deleteContact = (contactId) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore
          .collection("contacts")
          .doc(contactId)
          .delete()
          .then(() => {
            console.log("Contact deleted successfully!");
          })
          .catch((err) => {
            console.log("An error occured!", err);
          })
      };
    };

// Action creator for editing contact
export const editContact = (updatedContact) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("contacts").doc(updatedContact.id).update(updatedContact).then(() => {
          console.log("Contact updated successfully!");
        }).catch((err) => {
          console.log("An error occured!", err);
        })
      }
    };
