import "./App.css";
import FirstApp from  "./components/FirstApp";

function App() {
  return (
    <>
      <h1>Hola mundo!</h1>
      <FirstApp title={"Este es mi titulo"} sum={10}/>
    </>
  );
}

export default App;
