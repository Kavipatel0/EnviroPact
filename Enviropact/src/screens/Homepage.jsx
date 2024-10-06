import { useState } from "react";
import { Button } from "antd";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <nav className="bg-transparent flex-row content-center px-20 py-5 z-10">
          <ul>
            <li>
              <img
                src="../../assets/images/tree-icon.svg"
                className="float-left px-5"
              ></img>
            </li>
            <li className="py-4 float-left text-8-xl font-bold text-black geist-reg">
              Enviro-Pact
            </li>
            <li>
              <Button
                type="primary"
                className="p-5 float-right text-md text-black"
                style={{ background: "rgb(132 204 22)" }}
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </nav>

        <body>
          {/*Hero Page */}
          <section className="min-h-screen bg-[url('../../assets/images/Background.svg')] bg-cover bg-no-repeat bg-right-bottom">
            <div className="p-12 py-40 max-w-full">
              <h1 className="font-bold text-6xl text-zinc-300 geist-reg">
                Preserve your pact
                <br />
                with the Earth.
              </h1>
              <div className="pb-5 text-lg max-w-full">
                <p className="text-lime-500 text-base geist-reg">
                  A new way to engage with your community and better
                  <br /> the Earth together, one trash bag at a time.
                </p>
              </div>
              <Button
                type="primary"
                className="p-5 text-lg text-black"
                style={{ background: "rgb(132 204 22)" }}
              >
                Search Events →
              </Button>
            </div>
          </section>
        </body>
      </div>
    </>
  );
}

export default Homepage;
