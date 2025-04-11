import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerAuth } from "../store/slices/Auth/thunks.js";

import { Form } from "./Form.jsx";

export const Registro = ({changestateAuth}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    dispatch(registerAuth(email, password, navigate));
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
