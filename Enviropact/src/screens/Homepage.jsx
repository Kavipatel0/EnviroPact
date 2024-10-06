import { useState } from "react";
import { Button } from "antd";
import { Card } from "antd";

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
                className="float-left px-2"
              ></img>
            </li>
            <li className="flex-row justify-center py-2 float-left text-lg text-black geist-reg">
              Enviro-Pact
            </li>
            <li>
              <Button
                type="primary"
                className="py-2 px-4 float-right text-md text-black geist-reg"
                style={{ background: "rgb(132 204 22)" }}
              >
                Sign In
              </Button>
            </li>
          </ul>
        </nav>

        <body>
          {/*Hero Page */}
          <section className="min-h-screen bg-[url('../../assets/images/Background.svg')] bg-cover bg-no-repeat bg-right-bottom">
            <div className="p-12 py-40 max-w-full">
              <h1 className="font-bold text-8xl text-zinc-300 geist-reg">
                Preserve your pact
                <br />
                with the Earth.
              </h1>
              <div className="pb-5 max-w-full">
                <p className="py-2 text-2xl text-lime-500 text-base geist-reg">
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

          <section className="bg-white-100">
            <div className="p-12 py-4 max-w-full">
              <h1 className="font-bold text-center text-black text-6xl geist-reg">
                Upcoming Events in Gainesville, FL
              </h1>
              <div className="p-10 flex flex-row justify-between items-center">
                <Card title="SASE Street Cleanup 1" bordered={false} style={{ width: 500, height: 300 }}>
                  <div className="justify-items-center flex flex-row ">
                    <div className="basis-1/2">
                      <div className="float-left h-full flex flex-col justify-center">
                          <p className="text-xl geist-reg">1234 SW Archer RD</p>
                          <p className="text-lg text-zinc-500 geist-reg">Gainesville, FL</p>
                          <p className="pb-5 text-lg text-zinc-500 geist-reg">Sept. 11, 2024</p>
                          <Button
                            type="primary"
                            className="p4 text-md text-black geist-reg max-w-sm"
                            style={{ background: "rgb(132 204 22)" }}
                          >
                            Join this event
                          </Button>
                      </div>
                    </div>
                    <div className="basis-1/2">
                        <img 
                        src="../../assets/images/street-banner-1.svg" 
                        className="pl-10 float-right" 
                        style={{ width: 250, height: 200 }}>
                        </img>
                    </div>
                  </div>
                </Card>

                <Card title="SASE Street Cleanup 2" bordered={false} style={{ width: 500, height: 300 }}>
                  <div className="justify-items-center flex flex-row ">
                    <div className="basis-1/2">
                      <div className="float-left h-full flex flex-col justify-center">
                          <p className="text-xl geist-reg">1234 SW Archer RD</p>
                          <p className="text-lg text-zinc-500 geist-reg">Gainesville, FL</p>
                          <p className="pb-5 text-lg text-zinc-500 geist-reg">Sept. 11, 2024</p>
                          <Button
                            type="primary"
                            className="p4 text-md text-black geist-reg max-w-sm"
                            style={{ background: "rgb(132 204 22)" }}
                          >
                            Join this event
                          </Button>
                      </div>
                    </div>
                    <div className="basis-1/2">
                        <img 
                        src="../../assets/images/street-banner-1.svg" 
                        className="pl-10 float-right" 
                        style={{ width: 250, height: 200 }}>
                        </img>
                    </div>
                  </div>
                </Card>

                <Card title="SASE Street Cleanup 3" bordered={false} style={{ width: 500, height: 300 }}>
                  <div className="justify-items-center flex flex-row ">
                    <div className="basis-1/2">
                      <div className="float-left h-full flex flex-col justify-center">
                          <p className="text-xl geist-reg">1234 SW Archer RD</p>
                          <p className="text-lg text-zinc-500 geist-reg">Gainesville, FL</p>
                          <p className="pb-5 text-lg text-zinc-500 geist-reg">Sept. 11, 2024</p>
                          <Button
                            type="primary"
                            className="p4 text-md text-black geist-reg max-w-sm"
                            style={{ background: "rgb(132 204 22)" }}
                          >
                            Join this event
                          </Button>
                      </div>
                    </div>
                    <div className="basis-1/2">
                        <img 
                        src="../../assets/images/street-banner-1.svg" 
                        className="pl-10 float-right" 
                        style={{ width: 250, height: 200 }}>
                        </img>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          
          <section className="min-h-screen bg-[url('../../assets/images/Background2.svg')] bg-cover bg-no-repeat bg-right-bottom">
            <div className="p-12 py-40 max-w-full">
              <h1 className="float-right pr-60 font-bold text-6xl text-zinc-300 geist-reg">
                "Grow your community's tree."
              </h1>
              <div className="pb-5 max-w-full">
              <p className="py-2 float-right text-xl text-zinc-300 text-base geist-reg">
                A new way to engage with your community and better
                <br /> the Earth together, one trash bag at a time.
              </p>
              </div>
            </div>
          </section>
        </body>
      </div>
    </>
  );
}

export default Homepage;
