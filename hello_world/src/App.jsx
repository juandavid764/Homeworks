import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas publicas  */}
        <Route path="/" element={<HomePage />} />

        {/* Rutas privadas */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
