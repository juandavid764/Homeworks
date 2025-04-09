import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Home</h1>

      <nav className="flex gap-6">
        <Link
          to="/dashboard"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition"
        >
          Dashboard
        </Link>
        <Link
          to="/login"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl transition"
        >
          Login
        </Link>
      </nav>
    </div>
  );
};
