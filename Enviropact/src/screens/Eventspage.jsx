import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Input, Modal } from "antd";
import { signInWithGoogle } from "../auth/authService";
import  { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import CreateEventBtn from "../components/CreateEventBtn";

const { Search } = Input;


function Eventspage() {

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
    navigate("/");
  };

    
  return (
    <div>
      <nav className="bg-transparent flex justify-between items-center px-10 py-5 z-10">
        <ul className="flex items-center justify-center space-x-5">
          <li>
            <img src="../../assets/images/tree-icon.svg" />
          </li>
          <li className="text-lg text-black geist-reg">Enviro-Pact</li>
        </ul>
        {!isSignedIn && (
        <Button
          type="primary"
          className="text-md text-black geist-reg"
          style={{ background: "rgb(190, 242, 100)" }}
        >
          Sign In
        </Button>
        )}
      </nav>

      {/*Body*/}
      <div className="bg-green-950 h-screen flex flex-col items-center justify-start gap-4 pt-10">
        <img
          className="w-40"
          src="../../assets/images/hand-with-sapling.svg"
          alt=""
        />
        {/*Header*/}
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl text-white geist-reg">
            Find events in your area.
          </h1>
          <p className="text-lg text-lime-300">
            Make an impact. Plant your seed.
          </p>
        </div>

        {/*Searchbar*/}
        <div className="flex items-center gap-4">
          <Search
            placeholder="search an event"
            allowClear
            enterButton={
              <Button
                className="text-sm"
                style={{
                  backgroundColor: "rgb(190, 242, 100)",
                  borderColor: "rgb(190, 242, 100)",
                  color: "black",
                }}
              >
                Search
              </Button>
            }
            size="large"
            onSearch={() => {
              alert("BELLO");
            }}
            style={{
              width: 350,
            }}
          />
          <Button
            size="large"
            className="flex items-center text-sm"
            variant="filled"
            style={{
              backgroundColor: "rgb(190, 242, 100)",
              borderColor: "rgb(190, 242, 100)",
              color: "black",
            }}
          >
            Create an event
            <img
              className="w-5"
              src="../../assets/icons/calendar-icon.svg"
              alt="calendar icon"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Eventspage;
