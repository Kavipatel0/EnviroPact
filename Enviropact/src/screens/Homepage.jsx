import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./Homepage.css";
import wave from "../assets/HomePageWave.png";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { signInWithGoogle } from "../auth/authService";
import  { useState, useEffect } from "react";
import logo from "../assets/Logo.png";


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
      <div id="homepage-navbar">
        <img src={logo} id="logo"/>
        <ul>
          <li>Why?</li>
          <li>Events</li>
          <li>Contact</li>
          {!isSignedIn && (
            <li>
              <Button type="primary" id="homepage-signIn-btn" onClick={handleSignIn}>
                Sign In
              </Button>
            </li>
          )}
        </ul>
      </div>
      <div id="homepage-hero">
        <h1>Preserve your pact with the Earth.</h1>
        <p>A new way to engage with your community and better the Earth together one trash bag at a time.</p>
        <Button type="primary" id="homepage-searchEvents-btn" onClick={handleSearchEvents}>
          Search Events
        </Button>
      </div>
      <img src={wave} alt="Wave decoration" id="homepage-WaveDecoration" />
    </>
  );
}

export default Homepage;
