import { useState } from "react";
import { Button } from "antd";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-950">
        <nav className="p-10 h-8">
          <ul>
            <li><img src="../images/tree-icon.svg" className="float-left px-5"></img></li>
            <li className="py-4 float-left text-xl font-bold text-zinc-300 geist-reg">
              Enviro-Pact
            </li>
            <li>
              <Button
                type="primary"
                className="p-5 float-right text-lg text-black"
                style={{ background: "rgb(132 204 22)" }}
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </nav>

        <body className="min-h-screen h-screen relative">
          <div className="p-12 py-48 max-w-5xl">
            <h1 className="font-bold text-8xl text-zinc-300 geist-reg">
              Preserve your pact with the Earth.
            </h1>
            <div className="pb-5 text-2xl max-w-2xl text-lime-500 geist-reg">
              A new way to engage with your community and better the Earth
              together, one trash bag at a time.
            </div>
            <Button
              type="primary"
              className="p-5 text-lg text-black"
              style={{ background: "rgb(132 204 22)" }}
            >
              Search Events →
            </Button>
          </div>
          </body>
          <img
            src="../images/swoop-hands.svg"
            className="absolute top-10 bottom-0 left-0"
          ></img>
      </div>
    </>
  );
}

export default Homepage;
