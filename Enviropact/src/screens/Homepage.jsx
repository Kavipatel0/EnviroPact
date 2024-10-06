import React from "react";
import { Button, Card } from "antd";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../auth/authService";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

function Homepage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true); // User is signed in
        console.log("User is signed in: ", user.displayName);
      } else {
        setIsSignedIn(false); // User is signed out
        console.log("No user is signed in");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSearchEvents = () => {
    navigate("/events");
  };

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div>
        <nav
          className="bg-green-950 sticky top-0 flex justify-between items-center px-20 py-4 z-10"
          style={{ backgroundColor: "rgb(0, 51, 16)" }}
        >
          <ul className="flex items-center justify-center">
            <li
              onClick={navigateHome}
              className="flex items-center justify-center text-lg text-black geist-reg hover:cursor-pointer"
            >
              <img src="../../assets/images/tree-icon.svg" className="px-2" />
              <p className="text-white">Enviro-Pact</p>
            </li>
          </ul>
          {!isSignedIn && (
            <Button
              type="primary"
              className="text-md text-black geist-reg"
              style={{ background: "rgb(132 204 22)" }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          )}
        </nav>

        {/*Hero Page */}
        <section className="min-h-screen bg-[url('../../assets/images/hero-home-background.svg')] bg-cover bg-no-repeat bg-right-bottom">
          <div className="flex flex-col px-20 py-32 max-w-full gap-4">
            <h1 className="font-bold text-6xl text-zinc-300 geist-reg leading-tight">
              Preserve your pact
              <br />
              with the Earth.
            </h1>
            <div className="pb-5 text-lg max-w-full">
              <p className="text-lime-500 text-lg geist-reg">
                A new way to engage with your community and better
                <br /> the Earth together, one trash bag at a time.
              </p>
            </div>
            <Button
              type="primary"
              className="p-5 text-lg text-black w-60"
              style={{ background: "rgb(132 204 22)" }}
              onClick={handleSearchEvents}
            >
              Search Events <ArrowRight className="h-6 ml-1.5" />
            </Button>
          </div>
        </section>

        {/** second page */}
        <section className="pt-10 bg-white-100">
          <div className="flex flex-col justify-center items-center p-5 py-4 max-w-full">
            <h1 className="font-bold text-center text-black text-6xl geist-reg">
              Upcoming Events in Gainesville, FL
            </h1>
            <div className="max-w-full p-20 flex flex-row justify-between items-center gap-5">
              <Card
                title="SASE Street Cleanup 1"
                bordered={true}
                style={{
                  width: 500,
                  height: 275,
                  borderColor: "#000",
                  borderWidth: 1,
                  borderStyle: "solid",
                }}
              >
                <div className="justify-items-center flex flex-row ">
                  <div className="basis-1/2">
                    <div className="float-left h-full flex flex-col justify-center">
                      <p className="text-xl geist-reg">1234 SW Archer RD</p>
                      <p className="text-lg text-zinc-500 geist-reg">
                        Gainesville, FL
                      </p>
                      <p className="pb-5 text-lg text-zinc-500 geist-reg">
                        Sept. 11, 2024
                      </p>
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
                      src="../../assets/images/street-banner.svg"
                      className="pl-10 float-right"
                      style={{ width: 250, height: 200 }}
                    ></img>
                  </div>
                </div>
              </Card>
              <Card
                title="SASE Street Cleanup 1"
                bordered={true}
                style={{
                  width: 500,
                  height: 275,
                  borderColor: "#000",
                  borderWidth: 1,
                  borderStyle: "solid",
                }}
              >
                <div className="justify-items-center flex flex-row ">
                  <div className="basis-1/2">
                    <div className="float-left h-full flex flex-col justify-center">
                      <p className="text-xl geist-reg">1234 SW Archer RD</p>
                      <p className="text-lg text-zinc-500 geist-reg">
                        Gainesville, FL
                      </p>
                      <p className="pb-5 text-lg text-zinc-500 geist-reg">
                        Sept. 11, 2024
                      </p>
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
                      src="../../assets/images/street-banner.svg"
                      className="pl-10 float-right"
                      style={{ width: 250, height: 200 }}
                    ></img>
                  </div>
                </div>
              </Card>
              <Card
                title="SASE Street Cleanup 1"
                bordered={true}
                style={{
                  width: 500,
                  height: 275,
                  borderColor: "#000",
                  borderWidth: 1,
                  borderStyle: "solid",
                }}
              >
                <div className="justify-items-center flex flex-row ">
                  <div className="basis-1/2">
                    <div className="float-left h-full flex flex-col justify-center">
                      <p className="text-xl geist-reg">1234 SW Archer RD</p>
                      <p className="text-lg text-zinc-500 geist-reg">
                        Gainesville, FL
                      </p>
                      <p className="pb-5 text-lg text-zinc-500 geist-reg">
                        Sept. 11, 2024
                      </p>
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
                      src="../../assets/images/street-banner.svg"
                      className="pl-10 float-right"
                      style={{ width: 250, height: 200 }}
                    ></img>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        {/**slide 1 */}
        <section className="min-h-screen bg-cover bg-[url('../../assets/images/page-3-background.svg')] bg-no-repeat bg-left-top bg-green-950 flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-end justify-center bg-red-500">
            <h1 className="font-bold text-6xl text-white geist-reg">
              "Grow your community's tree."
            </h1>
            <div className="max-w-full">
              <p className="text-xl text-white geist-reg">
                A new way to engage with your community and better
                <br /> the Earth together, one trash bag at a time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
