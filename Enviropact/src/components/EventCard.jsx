import React from "react";
import { Button, Card } from "antd";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";


import "./EventCard.css";

const EventCard = ({ title, organization, description, location, date, time, rsvpCount }) => {

    const [isSignedIn, setIsSignedIn] = useState(false);
  
    const auth = getAuth();
  
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





  return (
    <Card id="event-card">
        <div id="event-card-wrapper">
            <div id="event-info">
                <h2 id="card-title">{title}</h2>
                <p id="card-organization">{organization}</p>
                <p id="card-description">{description}</p>
                <div id="card-footer">
                    <MapPin style={{ width: "20px" }} />
                    <p id="card-location">{location}</p>
                    <CalendarDays style={{ width: "20px" }} />
                    <p id="card-date">{date}</p>
                </div>
            </div>
            <div id="event-attend">
                <p id="card-rsvpCount">
                <Users style={{ width: "20px" }} />{rsvpCount}
                </p>
                {isSignedIn && (
                    <Button id="event-join-btn" type="primary">Join Event</Button>
                )}
            </div>
        </div>
  </Card>
  );
};

export default EventCard;
