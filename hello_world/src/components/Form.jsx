import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../store/slices/Auth/thunks";

export const Form = ({ title, onSubmit, button }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formState.email, formState.password);
  };

  const handleAuthGoogle = (evt) => {
    evt.preventDefault();
    dispatch(loginWithGoogle(navigate));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-2xl rounded-2xl p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">{title}</h1>
      <hr className="border-gray-300" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={formState.email}
          onChange={onInputChange}
          autoComplete="username"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formState.password}
          onChange={onInputChange}
          autoComplete="current-password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Continuar
        </button>

        <button
          type="button"
          onClick={button.onClick}
          className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition duration-200"
        >
          {button.text}
        </button>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleAuthGoogle}
            className="flex items-center justify-center space-x-2 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google icon"
              className="w-5 h-5"
            />
            <span>Continuar con Google</span>
          </button>
        </div>
      </form>
    </div>
  );
};
