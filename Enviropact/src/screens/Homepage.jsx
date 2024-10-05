import { useState } from "react";
import "./Homepage.css";
import { Button } from "antd";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-500">Preserve your pact with the Earth.</h1>
      <Button className="text-orange-500">BRUH</Button>
    </>
  );
}

export default Homepage;
