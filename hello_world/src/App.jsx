import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
import { AlbumPage } from "./pages/AlbumPage.jsx";
import { NavegationPage } from "./pages/NavegationPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas publicas  */}
        <Route path="/" element={<HomePage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/navigation" element={<NavegationPage />} />
      </Routes>
    </Router>
  );
}

export default App;