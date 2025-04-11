import { useSelector, useDispatch } from "react-redux";
import { logoutAuth } from "../store/slices/Auth/thunks"; // Ajusta el path si es diferente

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { displayname } = useSelector((state) => state.auth);

  const handlelogoutAuth = () => {
    dispatch(logoutAuth());
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8 text-center space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        ¡Hola {displayname}!
      </h1>

      <button
        onClick={handlelogoutAuth}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Cerrar sesión
      </button>
    </div>
  );
};
