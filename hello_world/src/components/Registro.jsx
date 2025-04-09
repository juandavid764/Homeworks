import { useDispatch } from "react-redux";

import { registerAuth } from "../store/slices/Auth/thunks.js";

import { Form } from "./Form.jsx";

export const Registro = ({changestateAuth}) => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    dispatch(registerAuth(email, password));
  };

  let registerButton = {
    text: "iniciar sesión",
    onClick: () => {
      changestateAuth("loginWithEmail");
    },
  };

  return (
    <Form
      title={"Resgirtrarse"}
      button={registerButton}
      onSubmit={handleRegister}
    />
  );
};
