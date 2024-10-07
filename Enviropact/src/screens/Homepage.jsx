import React from "react";
import { Button } from "antd";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../auth/authService";
import  { useState, useEffect } from "react";


function Homepage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const auth = getAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);  // User is signed in
        console.log("User is signed in: ", user.displayName);
      } else {
        setIsSignedIn(false);  // User is signed out
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

  return (
    <>
      <div>
        <nav className="bg-transparent flex justify-between items-center px-20 py-5 z-10">
          <ul className="flex items-center justify-center space-x-5">
            <li>
            <li>
              <img src="../../assets/images/tree-icon.svg" className="px-2" />
            </li>
            <li className="text-lg text-black geist-reg">EnviroPact</li>
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
        <section className="min-h-screen bg-[url('../../assets/images/Background.svg')] bg-cover bg-no-repeat bg-right-bottom">
          <div className="px-20 py-40 max-w-full">
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
              onClick={handleSearchEvents}
            >
              Search Events →
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
