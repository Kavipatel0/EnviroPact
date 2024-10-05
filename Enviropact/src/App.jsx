import { useState } from "react";
import "./App.css";
import "./screens/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl text-red-500">TEST TAILWIND BRUH</h1>
    </>
  );
}

export default App;
