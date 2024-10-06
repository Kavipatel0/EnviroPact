import React from "react";
import "./Eventspage.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Input} from "antd";
import { signInWithGoogle } from "../auth/authService";
import  { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import EventCard from "../components/EventCard";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);


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
      <div id="eventspage-navbar">
        <img id="logo" src={logo} onClick={handleSearchEvents}/>
        <ul>
          <li onClick={handleSearchEvents}>Home</li>
          <li></li>
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
        <div id="eventspage-hero">
            <h1>Find events in your area.</h1>
            <p>Make an impact. Plant your seed.</p>
        </div>
        <div id="eventspage-search-wrapper">
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                style={{width: "40%", minWidth: "300px"}}
            />
            <Button type="primary" id="create-event-btn" >
                Create Event
            </Button>
        </div>
        <div id="eventspage-events-wrapper">
          <EventCard title="Beach Cleanup" organization="Ocean Conservancy" description="Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach!" location="Ocean Beach, San Francisco, CA" date="10/30/2021" time="10:00 AM" rsvpCount={10} />
          <EventCard title="Beach Cleanup" organization="Ocean Conservancy" description="Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach!" location="Ocean Beach, San Francisco, CA" date="10/30/2021" time="10:00 AM" rsvpCount={10} />
          <EventCard title="Beach Cleanup" organization="Ocean Conservancy" description="Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach!" location="Ocean Beach, San Francisco, CA" date="10/30/2021" time="10:00 AM" rsvpCount={10} />
          <EventCard title="Beach Cleanup" organization="Ocean Conservancy" description="Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach!" location="Ocean Beach, San Francisco, CA" date="10/30/2021" time="10:00 AM" rsvpCount={10} />
          <EventCard title="Beach Cleanup" organization="Ocean Conservancy" description="Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach!" location="Ocean Beach, San Francisco, CA" date="10/30/2021" time="10:00 AM" rsvpCount={10} />
          <EventCard title="Beach Cleanup" organization="Ocean Conservancy" description="Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach! Join us for a beach cleanup at Ocean Beach!" location="Ocean Beach, San Francisco, CA" date="10/30/2021" time="10:00 AM" rsvpCount={10} />

        </div>
    </div>
  );
}

export default Eventspage;
