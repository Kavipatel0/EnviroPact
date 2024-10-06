import React from "react";
import { Button, Card } from "antd";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { addUserToEvent, removeEvent, removeUserFromEvent, removeEventFromUser } from "../auth/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../auth/firebase";
import  EditEventBtn from "../components/EditEventBtn";

import "./EventCard.css";

const EventCard = ({ title, organization, description, location, date, time, rsvpCount, uniqueId, owner, fetchEvents, postNotification }) => {
  console.log("UNIQUE ID: ", uniqueId);

  const [hasJoinedEvent, setHasJoinedEvent] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsSignedIn(true); // User is signed in
        console.log("User is signed in: ", user.displayName);

        if (user.uid === owner) {
          console.log("User is the owner of the post");
          setIsOwner(true); // User is the owner of the post
        }

        const eventDoc = doc(db, "events", uniqueId);
        const snapshot = await getDoc(eventDoc);
        const data = snapshot.data();
        const arr = data["usersAttending"];
        console.log("User idddddddd:", user.uid);
        console.log("ARRAYYYY: ", arr);
        if (arr.includes(user.uid)) {
          console.log("User is in event!@!!@@")
          setHasJoinedEvent(true);
          await fetchEvents(); // Trigger re-fetching of events
        }
      } else {
        setIsSignedIn(false); // User is signed out
        console.log("No user is signed in");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleRemoveEvent = async () => {
    try {
      await removeEvent(uniqueId); 
      console.log(`Event removed: ${uniqueId}`);
      await fetchEvents(); // Trigger re-fetching of events
      postNotification('bottomRight', "Event Deleted!", `The event "${title}" has been deleted!`);

    } catch (error) {
      console.error("Failed to remove event:", error);
    }
  };

  const handleJoinEvent = async () => {
    try {
      await addUserToEvent(uniqueId, auth.currentUser.uid);
      setHasJoinedEvent(true);
      await fetchEvents(); // Trigger re-fetching of events
      console.log(hasJoinedEvent);
      postNotification('bottomRight', "Event Joined!", `You have joined the event "${title}"!`);

    } catch (error) {
      console.error("Failed to join event:", error);
      
    }
  };

  const handleLeaveEvent = async () => {
    try {
      await removeUserFromEvent(uniqueId, auth.currentUser.uid);
      await removeEventFromUser(uniqueId, auth.currentUser.uid);
      setHasJoinedEvent(false);
      await fetchEvents(); // Trigger re-fetching of events
      postNotification('bottomRight', "Event Left!", `You have left the event "${title}"!`);

      console.log(hasJoinedEvent);
    } catch (error) {
      console.error("Failed to leave event:", error);
    } 
  };

  // const currentUserUid = auth.currentUser.uid;
  // if (currentUserUid === owner) {
  //   console.log("User is the owner a post");
  //   setIsOwner(true); // User is the owner of the post
  // } else {
  //   setIsOwner(false); // User is not the owner of the post
  // }

  

  return (
    <Card id="event-card">
      <div id="event-card-wrapper">
        <div id="event-info">
          <div id="event-info-body">
            <strong><h2 id="card-title">{title}</h2></strong>
            <p id="card-organization">{organization}</p>
            <p id="card-description">{description}</p>
          </div>
          <div id="card-footer">
            <MapPin style={{ width: "20px" }} />
            <p id="card-location">{location}</p>
            <CalendarDays style={{ width: "20px" }} />
            <p id="card-date">{date}</p>
            <p id="card-time">at {time}</p>
          </div>
        </div>
        <div id="event-attend">
          <p id="card-rsvpCount">
            <Users style={{ width: "20px" }} /> {rsvpCount}
          </p>
          {isOwner && isSignedIn && (
            <EditEventBtn
            passedUniqueId={uniqueId}
            passedTitle={title}
            passedOrganization={organization}
            passedDescription={description}
            passedLocation={location}
            passedDate={date}
            passedTime={time}

            onEventUpdated={fetchEvents} // Function to call after updating
            postNotification={postNotification}


            >
              Edit Post
            </EditEventBtn>
          )}
          {isOwner && isSignedIn && (
            <Button
              id="event-delete-btn"
              type="primary"
              color="danger"
              variant="outlined"
              onClick={handleRemoveEvent}
            >
              Delete Post
            </Button>
          )}

          {!isOwner && hasJoinedEvent && isSignedIn && (
            <Button
              id="event-join-btn"
              type="primary"
              color="danger"
              variant="dashed"
              onClick={handleLeaveEvent} // Call leave event function
            >
              Leave Event
            </Button>
          )}
          {!isOwner && !hasJoinedEvent && isSignedIn && (
            <Button
              id="event-join-btn"
              type="primary"
              onClick={handleJoinEvent} // Call join event function
            >
              Join Event
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
