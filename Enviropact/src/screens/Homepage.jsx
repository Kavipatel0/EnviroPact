import React from "react";
import "./Homepage.css";
import wave from "../assets/HomePageWave.png";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { signInWithGoogle } from "../auth/authService";
import  { useState } from "react";

function Homepage() {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const navigate = useNavigate();

  const handleSearchEvents = () => {
    navigate("/events");
  }

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log("User signed in");
      setIsSignedIn(true); // Update the state to indicate the user is signed in
    } catch (error) {
      console.error("Sign-in error:", error); // Handle any errors that occur during sign-in
    }
  };


  return (
    <>
      <div id="navbar">
        <span>Logo</span>
        <ul>
          <li>Why?</li>
          <li>Events</li>
          <li>Contact</li>
          {!isSignedIn && (
            <li>
              <Button type="primary" id="signIn-btn" onClick={handleSignIn}>
                Sign In
              </Button>
            </li>
          )}
        </ul>
      </div>
      <div id="hero">
        <h1>Preserve your pact with the Earth.</h1>
        <p>A new way to engage with your community and better the Earth together one trash bag at a time.</p>
        <Button type="primary" id="searchEvents-btn" onClick={handleSearchEvents}>Search Events</Button>
      </div>
      <img src={wave} alt="Wave decoration" id="WaveDecoration"/>
    </>
  );
}

export default Homepage;
