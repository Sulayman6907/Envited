import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import cake from "../assets/cake.png";
import details from "../assets/details.svg";
import locationsvg from "../assets/location.svg";

const Event = () => {
  const [eventName, setEventName] = useState();
  const [hostName, setHostName] = useState();
  const [location, setLocation] = useState();
  const [pictureUrl, setPictureUrl] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    setEventName(localStorage.getItem("eventName"));
    setHostName(localStorage.getItem("hostName"));
    setLocation(localStorage.getItem("location"));
    setPictureUrl(localStorage.getItem("pictureUrl"));
    setStartDate(localStorage.getItem("startDate"));
    setEndDate(localStorage.getItem("endDate"));
  }, [eventName]);
  return (
    <div className="event-container">
      <div className="event-img-container">
        <img src={cake || pictureUrl} className="birthday-img" />
      </div>
      <div className="detail-section">
        <div className="event-name">{eventName || "Birthday bash"}</div>
        <div className="host-name"> Hosted by {hostName || "Sulayman"}</div>
        <div className="event-details">
          <img src={details} />
          <div className="date-details">
            <div className="start-date">
              {startDate
                ? moment(startDate).format("MMMM Do YYYY, h:mm a")
                : "Please Enter Date on the create page"}
            </div>
            <div className="end-date">
              {endDate
                ? moment(endDate).format("MMMM Do YYYY, h:mm a")
                : "Please Enter Date on the create page"}
            </div>
          </div>
        </div>
        <div className="event-details">
          <img src={locationsvg} />
          <div className="location-detail">
            {location || "Islamabad, Pakistan"}
          </div>
        </div>
      </div>
      <Link to="/create" style={{textDecoration:"none"}}>
        <div className="edit-button">Edit Details</div>
      </Link>
    </div>
  );
};

export default Event;
