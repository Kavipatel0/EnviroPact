import React, { useState } from "react";
import { Button, Modal, Divider, List, Spin} from "antd";
import { CalendarDays, MapPin, Users } from "lucide-react";

import { doc, getDoc } from "firebase/firestore"; // Firestore imports
import { db } from "../auth/firebase";

const EventInfoCard = ({ passedUniqueId, passedTitle, passedOrganization, passedDescription, passedLocation, passedDate, passedTime, passedRsvpCount }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);

  const showModal = async () => {
    setIsModalOpen(true);
    await fetchAttendees();
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchAttendees = async () => {
    try {
      setLoading(true);
      const eventDocRef = doc(db, "events", passedUniqueId);
      const eventDoc = await getDoc(eventDocRef);
  
      if (eventDoc.exists()) {
        const eventData = eventDoc.data();
        const attendeesList = eventData?.usersAttending || [];
  
        // Array to store display names
        const displayNames = await Promise.all(
          attendeesList.map(async (userId) => {
            // Fetch each user by their UUID from the 'users' collection
            const userDocRef = doc(db, "users", userId);
            const userDoc = await getDoc(userDocRef);
            
            if (userDoc.exists()) {
              const userData = userDoc.data();
              return userData?.name || "Unknown User"; // Fallback to 'Unknown User' if no displayName found
            } else {
              return "Unknown User"; // If no user document found, fallback
            }
          })
        );
  
        // Set the display names as attendees
        setAttendees(displayNames);
      }
    } catch (error) {
      console.error("Error fetching attendees:", error);
    } finally {
      setLoading(false); // Stop loading after fetching data
    }
  };



  return (
    <>
      <Button type="primary" onClick={showModal}>
        Event Details
      </Button>

      <Modal
        open={isModalOpen} // Make sure to use the correct prop (open instead of visible)
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >

        <strong><h1 style={{fontSize: "20px", paddingBottom: "6px"}}>{passedTitle}</h1></strong>
        <p><strong>Organization:</strong> {passedOrganization}</p>
        <p><strong>Description:</strong> {passedDescription}</p>

        <p className="flex items-center flex-row">
          <MapPin size={16} style={{ marginRight: '5px' }} />
          {passedLocation}
        </p>

        <p className="flex items-center flex-row">
          <CalendarDays size={16} style={{ marginRight: '5px' }} />
          {passedDate}, {passedTime}
        </p>
        <p className="flex items-center flex-row">
          <Users size={16} style={{ marginRight: '5px' }} />
          RSVP Count: {passedRsvpCount}
        </p>
        <Divider orientation="left">List of Attendees</Divider>

        {loading ? (
          <Spin /> 
        ) : (
          <List
            bordered
            dataSource={attendees}
            renderItem={(item) => (
              <List.Item>{item}</List.Item>
            )}
          />
        )}

      </Modal>

    </>
  );
};

export default EventInfoCard;
