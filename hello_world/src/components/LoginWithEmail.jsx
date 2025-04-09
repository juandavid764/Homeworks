import { useDispatch } from "react-redux";

import { loginAuth } from "../store/slices/Auth/thunks.js";

import { Form } from "./Form.jsx";

export const LoginWithEmail = ({changestateAuth}) => {
  const dispatch = useDispatch();

  const handleLoginEmail = (email, password) => {
    dispatch(loginAuth(email, password));
  };

  let registerButton = {
    text: "Registrarse",
    onClick: () => {
      changestateAuth("createAccount");
    },
  };

  return (
    <Form
      title={"Iniciar sesión"}
      button={registerButton}
      onSubmit={handleLoginEmail}
    />
  );
};
