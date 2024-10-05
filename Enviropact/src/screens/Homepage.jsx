import { useState } from "react";
import "./Homepage.css";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-50">Preserve your pact with the Earth.</h1>
    </>
  );
}

export default Homepage;
