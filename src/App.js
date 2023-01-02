import "./App.css";
import Props from "./components/props/Props.js";
import Usestate from "./components/usestate/Usestate.js";
import UseEffect from "./components/useEffect/UseEffect.js";

function App() {
  return (
    <div className="App">
      <Props name="Joel" description="Jotain" age={29} />
      <Props />
      <Usestate />
      <UseEffect />
    </div>
  );
}

export default App;
