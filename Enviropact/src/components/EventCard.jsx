import React from "react";
import { Button, Card } from "antd";
import { CalendarDays, MapPin, Users } from "lucide-react";

import "./EventCard.css";

const EventCard = ({ title, organization, description, location, date, time, rsvpCount }) => {
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
                <Button id="event-join-btn" type="primary">Join Event</Button>
            </div>
        </div>
  </Card>
  );
};

export default EventCard;
