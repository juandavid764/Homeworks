import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { login, register, logout, checkingCredentials } from "./authSlice.js";

import { auth } from "../../../firebase/config.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const registerAuth = (email, password, navigate) => {
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

export const loginAuth = (email, password, navigate) => {
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

export const loginWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();

  return async (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
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

export const logoutAuth = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
}
