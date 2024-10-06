import { useState } from "react";
import "./App.css";
import Homepage from "./screens/Homepage";
import Eventspage from "./screens/Eventspage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Homepage></Homepage> */}
      <Eventspage></Eventspage>
    </>
  );
}

export default App;
