import { db } from "./firebase.js";
import { collection, addDoc, updateDoc, arrayUnion, doc, increment, arrayRemove, query, where, getDocs } from "firebase/firestore";

export const addDocumentTesting= async () => {
  try {
    const doc = await addDoc(collection(db, "test"), {
      name: "AdrianAgain",
      hobby: "gettig good",
      money: 0
    });
    console.log("Added document with ID of", doc.id)
  }
  catch (e) {
    console.error("Firestore could not add document:", e)
  }
}

export const addEvent = async (title, organization, description, location, date, time) => {
  try {
    const event = await addDoc(collection(db, "events"), {
      title: title,
      organization: organization,
      description: description,
      location: location,
      date: date,
      time: time,
      usersAttending: [],
      rsvpCount: 0
    });
    console.log("Added event with ID of", event.id)
  }
  catch (e) {
    console.error("Firestore could not add event:", e)
  }
}

export const addUser = async (user) => {
  try {
    const q = query(collection(db, "users"), where(uid, "==", user.uid));
    const check = await getDocs(q);
    if (check.empty) {
      console.log("User already exists");
    }
    else {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        eventsJoined: []
      });
      console.log("Added user with ID of", user.uid);
    }
  }
  catch (e) {
    console.error("Firestore could not add user:", e);
  }
}

export const addUserToEvent = async (eventID, userID) => {
  const event = doc(db, "events", eventID);
  const user = doc(db, "users", userID);
  try {
    await updateDoc(event, {
      usersAttending: arrayUnion(user.id),
      rsvpCount: increment(1)
    });
    console.log("Updated usersAttending")
  }
  catch (e) {
    console.error("Firestore could not update usersAttending", e);
  }
}

export const removeUserFromEvent = async (eventID, userID) => {
  const event = doc(db, "events", eventID);
  const user = doc(db, "users", userID);
  try {
    await updateDoc(event, {
      usersAttending: arrayRemove(user.id),
      rsvpCount: increment(-1)
    });
    console.log("Removed user from usersAttending")
  }
  catch (e) {
    console.error("Firestore could not update usersAttending", e);
  }
}

export const addEventToUser = async (eventID, userID) => {
  const event = doc(db, "events", eventID);
  const user = doc(db, "users", userID);
  try {
    await updateDoc(user, {
      eventsJoined: arrayUnion(event.id)
    });
    console.log("Updated eventsJoined");
  }
  catch (e) {
    console.error("Firestore could not update eventsJoined", e);
  }
}

export const removeEventFromUser = async (eventID, userID) => {
  const event = doc(db, "events", eventID);
  const user = doc(db, "users", userID);
  try {
    await updateDoc(user, {
      eventsJoined: arrayRemove(event.id)
    });
    console.log("Updated eventsJoined");
  }
  catch (e) {
    console.error("Firestore could not update eventsJoined:", e);
  }
}