import "./App.css";
import { useState } from "react";
import { MyContext } from "./Context.jsx";
import { Dashboard } from "./Dashboard.jsx";

function App() {
  const [user, setUser] = useState("JLopez");

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </MyContext.Provider>
  );
}

export default App;
