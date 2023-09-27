import React from "react";
import Alert from "@mui/material/Alert";

const AlertCustomer = ({
fullName,
time,
email,
date,
partySize,
occasion
}) => {
  return (
    <div>
      <Alert severity="success" color="info">
        Thank you! A {occasion} reservation for {fullName} is booked for {date} at {time} for a party size of {partySize}.
          {email}
      </Alert>
    </div>
  );
};

export default AlertCustomer;
