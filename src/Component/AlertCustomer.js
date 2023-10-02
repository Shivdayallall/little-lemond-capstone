import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AlertCustomer = ({
  show,
  handleClose,
  fullName,
  time,
  email,
  date,
  partySize,
  occasion,
}) => {
  return (
    <Modal show={show} onHide={handleClose} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Reservation Confirmed!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Thank you! A {occasion} reservation for {fullName} is booked for {date} {" "}
        at {time} for a party  of {" "}  {partySize}.
        <br />
        check your email {email} for more details.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertCustomer;
