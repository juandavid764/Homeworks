import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let usuario = formData.username;
    let password = formData.password;

    if (usuario === "Juan" && password === "1234") {
      setUser("admin");
      navigate("/dashboard");
    }else{
      console.log("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Inicio de sesión
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={handleChange}
            value={formData.username}
            name="username"
            type="text"
            placeholder="Usuario"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={handleChange}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-xl transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
