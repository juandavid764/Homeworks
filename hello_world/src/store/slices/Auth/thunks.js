import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../../firebase/config.js";

import { useNavigate } from "react-router-dom";

export const registerAuth = (email, password) => {
  navigate = useNavigate();

  return async (dispatch) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (response) {
      await updateProfile(auth.currentUser, {
        displayName: "Juan",
        photoURL: "",
      });

      const { email } = response.user;

      dispatch(register({ email }));

      navigate("/profile");
    } else {
      throw new Error("registerAuth failed");
    }
  };
};

export const loginAuth = (email, password) => {
  navigate = useNavigate();
  return async (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        const { email, displayName, uid } = user;

        dispatch(login({ email, displayName, uid }));

        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorMessage + " " + errorCode);
      });
  };
};
