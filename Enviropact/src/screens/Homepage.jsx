import { useState } from "react";
import { Button } from "antd";
import "./Homepage.css";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul><li>Enviro-Pact</li></ul>     
      <Button type="primary" className="float-right" style={{ background:"#266347" }}>Sign Up</Button>     
      <h1 className="text-red-50">Preserve your pact with the Earth.</h1>     
      <div class="subheading">A new way to engage with your community and better the Earth together, one trash bag at a time.</div>
      <Button type="primary">Search Events →</Button>
    </>
  );
}

export default Homepage;
