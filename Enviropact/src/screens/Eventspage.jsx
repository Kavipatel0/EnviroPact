import React from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import { signInWithGoogle } from "../auth/authService";
import { useState, useEffect, useMemo } from "react";
import EventCard from "../components/EventCard";
import CreateEventBtn from "../components/CreateEventBtn";
import { getEvents } from "../auth/firestore";
import moment from 'moment';
import { motion, useScroll, useTransform} from "framer-motion"; 



import { Divider, notification, Space } from 'antd';
const Context = React.createContext({
  name: 'Default',
});

const { Search } = Input;

function Eventspage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState([]); // State for events
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventsUserIsIn, setEventsUserIsIn] = useState([]);
  const [eventsUserIsNotIn, setEventsUserIsNotIn] = useState([]);
  const [eventsSearched, setEventsSearched] = useState([]);
  const [searchInput, setSearchInput] = useState("");



  const auth = getAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
        console.log("User is signed in: ", user.displayName);
        openNotification('bottomRight', "Signed In!", `Welcome, ${user.displayName}!`);
      } else {
        setIsSignedIn(false);
        console.log("No user is signed in");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const openNotification = (placement, header, message) => {
    const auth = getAuth();
    const user = auth.currentUser;
    notification.info({
      message: `${header}`,
      description: `${message}`,
      placement,
    });
  };



  
  const fetchEvents = async () => {
    setLoading(true);
  
    try {
      const fetchedEvents = await getEvents();
  
      const auth = getAuth();
      const currentUser = auth.currentUser;
      const currentUserId = currentUser ? currentUser.uid : null;
  
      const sortedEvents = fetchedEvents.sort((a, b) => {
        const dateTimeA = moment(`${a.date} ${a.time}`, 'YYYY-MM-DD h:mm A').toDate();
        const dateTimeB = moment(`${b.date} ${b.time}`, 'YYYY-MM-DD h:mm A').toDate();
        return dateTimeA - dateTimeB; // Ascending order
      });
  
      const eventsUserIsIn = [];
      const eventsUserIsNotIn = [];

      // compare all the events title,
      // if search input is a substring of tittle
      // add to eventsSearched
      
    
  
      sortedEvents.forEach((event) => {
        if (event.usersAttending?.includes(currentUserId)) {
          eventsUserIsIn.push(event); // User is attending this event
        } else if (!event.usersAttending?.includes(currentUserId)) {
          eventsUserIsNotIn.push(event); // User is not attending this event
        }
      });
  
      // You can save the two categories of events into two different state variables
      setEventsUserIsIn(eventsUserIsIn);
      setEventsUserIsNotIn(eventsUserIsNotIn);
  
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  fetchEvents(); // Fetch events on component mount
}, []); // Empty dependency array ensures it only runs on mount

  const handleSearchEvent = async () => {
    const fetchedEvents = await getEvents();
    const sortedEvents = fetchedEvents.sort((a, b) => {
      const dateTimeA = moment(`${a.date} ${a.time}`, 'YYYY-MM-DD h:mm A').toDate();
      const dateTimeB = moment(`${b.date} ${b.time}`, 'YYYY-MM-DD h:mm A').toDate();
      return dateTimeA - dateTimeB; // Ascending order
    });

    console.log("HJSDBFHSBFSBHJLDFBSDHBF SDFBJSDBFBHSDJBFHSDFJSDBHJFBSDJHFBSDJHFBJHSDFB");
    console.log("input is:", searchInput);

    const eventsSearched = sortedEvents.filter((event) => {
      console.log("event title is:", event.title);
      const title = event.title?.toLowerCase() || ""; // Default to empty string if undefined
      return title.includes(searchInput.toLowerCase());
    });

    if (searchInput != "") {
      setEventsSearched(eventsSearched);
    }
    console.log("EVENTS SEARCHED", eventsSearched);
  }

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Successfully signed out");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <div className="relative">
      <div id="navigation-bar" className="flex align-middle justify-center absolute left-0 top-0 w-full">
      <motion.nav
          className="w-3/8 px-4 py-4 backdrop-blur-md rounded-md bg-white/50  sticky top-5 flex justify-center items-center z-10 m-5"
          initial={{ opacity: 0, y: -50 }} // Starting state (invisible and moved up)
          animate={{ opacity: 1, y: 0 }} // End state (fully visible and back to position)
          transition={{ duration: 0.3, ease: "easeOut" }} // Animation duration and easing
        >
          <ul className="flex items-center justify-center gap-5">
            <li
              className="flex items-center justify-center text-lg text-black geist-reg hover:cursor-pointer mr-20"
            >
              <img
                src="../../assets/images/tree-icon.svg"
                className="px-2 w-10"
              />
              <p className="text-green-950" onClick={() => navigate("/")} style={{cursor: "pointer"}}>EnviroPact</p>
            </li>
            <li>
              
            </li>
            <li className="hover:text-white">
              <a onClick={() => navigate("/about")} style={{cursor: "pointer"}}>Contact</a>
            </li>
            <li className="hover:text-white">
              <a onClick={() => navigate("/events")} style={{cursor: "pointer"}}>Events</a>
            </li>
            <li>
            {!isSignedIn && (
          <Button
            type="primary"
            className="text-md text-black geist-reg"
            style={{ background: "rgb(190, 242, 100)" }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        )}
        {isSignedIn && (
          <Button
            type="primary"
            className="text-md text-black geist-reg"
            style={{ background: "rgb(190, 242, 100)" }}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        )}
            </li>
          </ul>
        </motion.nav>
        </div>
      

      {/* Body */}
      <div className="bg-green-950 h-full min-h-screen flex flex-col items-center justify-start gap-4 pt-32">
        <img
          className="w-40"
          src="../../assets/images/hand-with-sapling.svg"
          alt=""
        />
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl text-white geist-reg">
            Find events in your area.
          </h1>
          <p className="text-lg text-lime-300">
            Make an impact. Plant your seed.
          </p>
        </div>

        {/* Searchbar */}
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
                onClick={handleSearchEvent}
              >
                Search
              </Button>
            }
            size="large"
            onSearch={() => {
              console.log("CLICKED SEARCHHHHHHHH");
            }}
            style={{
              width: 350,
            }}
            onChange={(e) => setSearchInput(e.target.value)}
          
          />
          {isSignedIn && (
            <CreateEventBtn
              size="large"
              className="flex items-center text-sm"
              variant="filled"
              
              onEventCreated={fetchEvents} // Pass fetchEvents as a prop
              postNotification = {openNotification}
              fetchEvents={fetchEvents}
            />
          )}
        </div>
        <div className="flex flex-col gap-4">
        {eventsSearched.length > 0 && (
          <Divider 
            orientation="middle" 
            style={{
              color: "white",
              borderColor: "white"
            }}>
            Searched Events
          </Divider>
        )}

          {eventsSearched.map((event) => (
            <EventCard 
              key={event.id} 
              title={event.title} 
              organization={event.organization} 
              description={event.description} 
              location={event.location} 
              date={event.date} 
              time={event.time} 
              rsvpCount={event.rsvpCount} 
              uniqueId={event.id}
              owner={event.owner}
              fetchEvents={fetchEvents}
              postNotification = {openNotification}
            />
          ))}

        {eventsUserIsIn.length > 0 && (
          <Divider 
            orientation="middle" 
            style={{
              color: "white",
              borderColor: "white"
            }}>
            Joined Events
          </Divider>
        )}

          {eventsUserIsIn.map((event) => (
            <EventCard 
              key={event.id} 
              title={event.title} 
              organization={event.organization} 
              description={event.description} 
              location={event.location} 
              date={event.date} 
              time={event.time} 
              rsvpCount={event.rsvpCount} 
              uniqueId={event.id}
              owner={event.owner}
              fetchEvents={fetchEvents}
              postNotification = {openNotification}
            />
          ))}

          {eventsUserIsNotIn.length > 0 && (
            <Divider 
              orientation="middle" 
              style={{
                color: "white",
                borderColor: "white"
              }}>
              Future Events
            </Divider>
          )}

          {eventsUserIsNotIn.map((event) => (
            <EventCard 
              key={event.id} 
              title={event.title} 
              organization={event.organization} 
              description={event.description} 
              location={event.location} 
              date={event.date} 
              time={event.time} 
              rsvpCount={event.rsvpCount} 
              uniqueId={event.id}
              owner={event.owner}
              fetchEvents={fetchEvents}
              postNotification = {openNotification}
            />
          ))}
          <div className="h-48">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventspage;
