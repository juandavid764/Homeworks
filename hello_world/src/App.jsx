import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";

import { useState } from "react";

import { userContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          {/* Rutas publicas  */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas privadas  */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
