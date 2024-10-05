import { useState } from "react";
import "./App.css";
import Homepage from "./screens/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage></Homepage>
    </>
  );
}

export default App;
