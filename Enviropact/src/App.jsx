import { useState } from "react";
import "./App.css";
import Homepage from "./screens/Homepage";
import About from "./screens/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About></About>
    </>
  );
}

export default App;
