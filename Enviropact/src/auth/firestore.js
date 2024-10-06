import { db } from "./firebase.js";
import { collection, addDoc, updateDoc, arrayUnion, doc, increment, arrayRemove, query, where, getDocs, setDoc, deleteDoc, getDoc } from "firebase/firestore";

export const getEvents = async () => {
  const eventsCollection = collection(db, 'events');
  const eventSnapshot = await getDocs(eventsCollection);
  const eventsList = eventSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return eventsList;
};

export const addEvent = async (title, organization, owner, description, location, date, time) => {
  try {
    const event = await addDoc(collection(db, "events"), {
      title: title,
      organization: organization,
      owner: owner,
      description: description,
      location: location,
      date: date,
      time: time,
      usersAttending: [],
      rsvpCount: 1
    });
    console.log("Added event with ID of", event.id)
    return event;
  }
  catch (e) {
    console.error("Firestore could not add event:", e)
    return null;
  }
}

export const addUser = async (user) => { // WORKS
  try {
    const userID = user.uid;
    const userSetDoc = doc(db, "users", userID);
    await setDoc(userSetDoc, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      eventsJoined: [],
      eventsCreated: []
    });
    console.log("Added user with ID of", user.uid);
  }
  catch (e) {
    console.error("Firestore could not add user:", e);
  }
}

export const removeEvent = async (eventID) => {
  try {
    const event = doc(db, "events", eventID);
    const snapshot = await getDoc(event);

    if (!snapshot.exists()) {
      throw new Error("Event does not exist");
    }

    const data = snapshot.data();
    console.log("1", data["usersAttending"]);
    const arr = data["usersAttending"];
    console.log("2", arr);

    for (const element of arr) {
      const person = doc(db, "users", element);
      await updateDoc(person, {
        eventsJoined: arrayRemove(eventID)
      });
    };
    const ownerID = data["owner"];
    const owner = doc(db, "users", ownerID);
    await updateDoc(owner, {
      eventsCreated: arrayRemove(eventID)
    });

    await deleteDoc(event);
  }
  catch (e) {
    console.error("Firestorm could not delete event:", e);
  }
}

export const addUserToEvent = async (eventID, userID) => {
  const event = doc(db, "events", eventID);
  const user = doc(db, "users", userID);

  try {
    const snapshot = await getDoc(event);
    const data = snapshot.data();
    const arr = data["usersAttending"];

    if (!arr.includes(user.id)) {
      await updateDoc(event, {
        usersAttending: arrayUnion(user.id)
      });

      const updatedSnapshot = await getDoc(event);
      const updatedData = updatedSnapshot.data();
      const updatedArr = updatedData["usersAttending"];

      await addEventToUser(eventID, user.id);
      await updateDoc(event, {
        rsvpCount: updatedArr.length
      });
      console.log("Updated usersAttending")
    } else {
      console.log("User is already attending this event")
    }
  }
  catch (e) {
    console.error("Firestore could not update usersAttending:", e)
  }
}

export const removeUserFromEvent = async (eventID, userID) => {
  const event = doc(db, "events", eventID);
  const user = doc(db, "users", userID);

  try {
    const snapshot = await getDoc(event);
    const data = snapshot.data();
    const arr = data["usersAttending"];

    await updateDoc(event, {
      usersAttending: arrayRemove(userID),
    });

    const updatedSnapshot = await getDoc(event);
    const updatedData = updatedSnapshot.data();
    const updatedArr = updatedData["usersAttending"];

    await updateDoc(event, {
      rsvpCount: updatedArr.length
    });
    console.log("Removed user from usersAttending")
  }
  catch (e) {
    console.error("Firestore could not update usersAttending:", e)
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

export const addCreatedEventToUser = async (eventID, userID) => {
  const event = doc(db, "events", eventID);
  const user = doc(db, "users", userID);
  try {
    await updateDoc(user, {
      eventsJoined: arrayUnion(event.id),
      eventsCreated: arrayUnion(event.id)
    });
    await addEventToUser(eventID, userID);
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
      eventsJoined: arrayRemove(eventID),
      eventsCreated: arrayRemove(eventID)
    });
    console.log("Updated eventsJoined");
  }
  catch (e) {
    console.error("Firestore could not update eventsJoined:", e);
  }
}

export const editEvent = async (eventID, title, organization, description, location, date, time) => {
  const event = doc(db, "events", eventID);
  try {
    await updateDoc(event, {
      title: title,
      organization: organization,
      description: description,
      location: location,
      date: date,
      time: time
    });
    console.log("Firestore updated event yippee");
  }
  catch (e) {
    console.error("Firestorm could not update event:", e);
  }
}