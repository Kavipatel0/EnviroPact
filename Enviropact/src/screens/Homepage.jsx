import { useState } from "react";
import { Button } from "antd";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-950">
        <nav className="p-10 h-8">
          <ul>
            <li className="float-left text-zinc-300">Enviro-Pact</li>
            <li>
              <Button
                type="primary"
                className="float-right text-black"
                style={{ background: "rgb(132 204 22)" }}
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </nav>

        <body className="min-h-screen h-screen relative">
          <div className="p-12">
            <h1 className="text-zinc-300 font-bold text-5xl max-w-50 geist-reg">
              Preserve your pact with the Earth.
            </h1>
            <div className="text-lime-500 pb-5">
              A new way to engage with your community and better the Earth
              together, one trash bag at a time.
            </div>
            <Button
              type="primary"
              className="text-black"
              style={{ background: "rgb(132 204 22)" }}
            >
              Search Events →
            </Button>
          </div>
          <img
            src="../images/swoop-hands.svg"
            className="absolute top-10 bottom-0 left-0"
          ></img>
        </body>
      </div>
    </>
  );
}

export default Homepage;
