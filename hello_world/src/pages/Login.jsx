import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser("admin");

    navigate("/dashboard");
  }

  return (
    <>
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar</button>
      </form>
    </>
  );
};
