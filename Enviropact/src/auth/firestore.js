import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

// export const addDocumentTesting= async () => {
//   try {
//     const doc = await addDoc(collection(db, "test"), {
//       name: "AdrianAgain",
//       hobby: "gettig good",
//       money: 0
//     });
//     console.log("Added document with ID of", doc.id)
//   }
//   catch (e) {
//     console.error("Firestore could not add document:", e)
//   }
// }

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

// export const addUserToEvent = async (eventID, user) => {
//   try {
//     const user = await addDoc(collection(db, "users"), {
//       eventID
//     });
//     console.log("Added user to event")
//   }
//   catch (e) {
//     console.error("Firestore could not add user to")
//   }
// }

// remove user from event funciton
// resvp++ and add user to list of event

