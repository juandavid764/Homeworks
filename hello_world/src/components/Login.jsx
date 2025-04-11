import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAuth } from "../store/slices/Auth/thunks.js";

import { Form } from "./Form.jsx";

export const Login = ({changestateAuth}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginEmail = (email, password) => {
    dispatch(loginAuth(email, password, navigate));
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
