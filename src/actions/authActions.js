// Action creator for signing up new users
export const signupUser = (user) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((userCredential) => console.log("User created successfully", userCredential))
          .catch((err) => console.log("Sorry, something went wrong!", err));
    };
};

export const loginUser = (email, password) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => console.log("user login successfully", userCredential))
          .catch((err) => console.log("Sorry, something went wrong", err))
    };
};

export const logoutUser = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase
            .logout()
            .then((user) => console.log("User logged out successfully",user))
            .catch((err) => console.log("Sorry, something went wrong", err))
    }
}