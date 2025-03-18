import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { AlbumPage } from "./pages/AlbumPage.jsx";
import { DoubleLinkedListPage } from "./pages/DoubleLinkedListPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas publicas  */}
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/double-linked-list" element={<DoubleLinkedListPage />} />
      </Routes>
    </Router>
  );
}

export default App;