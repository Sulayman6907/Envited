import React from "react";
import { useState } from "react";
import { TextInput, DateInput } from "grommet";
import { Grommet } from "grommet";

const Events = () => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [location, setLocation] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const submit =()=>{
    localStorage.setItem('eventName', eventName);
    localStorage.setItem('hostName',hostName);
    localStorage.setItem('location', location);
    localStorage.setItem('pictureUrl',pictureUrl);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate',endDate);

  }
  console.log(location);
  console.log(pictureUrl);
  console.log(startDate);
  console.log(endDate);
  const theme = {
    global: {
      colors: {
        border: {
          color: "red",
        },
      },
      focus: {
        outline: {
          color: "#240D57",
        },
        border: {
          color: "transparent",
        },
      },
    },
  };

  return (
    <Grommet theme={theme}>
      <div className="events-container">
        <div className="event-heading">Enter event details</div>
        <div className="form-container">
          <TextInput
            placeholder="Event Name"
            style={{
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              width: "100%",
              padding: "12px 36px",
              margin: "12px 0px",
            }}
            value={eventName}
            focusIndicator="false"
            onChange={(event) => setEventName(event.target.value)}
          />
          <TextInput
            placeholder="Host Name"
            style={{
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              width: "100%",
              padding: "12px 36px",
              margin: "12px 0px",
            }}
            value={hostName}
            focusIndicator="false"
            onChange={(event) => setHostName(event.target.value)}
          />
          <TextInput
            placeholder="Location"
            style={{
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              width: "100%",
              padding: "12px 36px",
              margin: "12px 0px",
            }}
            value={location}
            focusIndicator="false"
            onChange={(event) => setLocation(event.target.value)}
          />
          <TextInput
            placeholder="Picture Url"
            style={{
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              width: "100%",
              padding: "12px 36px",
              margin: "12px 0px",
            }}
            value={pictureUrl}
            focusIndicator="false"
            onChange={(event) => setPictureUrl(event.target.value)}
          />
          <div className="event-text"> Start Date</div>
          <DateInput
            format="mm/dd/yyyy"
            value={new Date().toISOString()}
            onChange={({ value }) => {
              setStartDate(value);
            }}
          />
          <div className="event-text"> End Date</div>
          <DateInput
            format="mm/dd/yyyy"
            value={new Date().toISOString()}
            onChange={({ value }) => {
              setEndDate(value);
            }}
          />
          <div className="landing-button" onClick={submit}>Create my event</div>
        </div>
      </div>
    </Grommet>
  );
};

export default Events;
