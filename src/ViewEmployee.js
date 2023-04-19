import React, { Component } from "react";
import {
  Modal,
  Card,
  Button,
  Row,
  Col,
  Form,
  ModalBody,
} from "react-bootstrap";

export const ViewEmployee = (props) => {
  const { employee } = props;
  return (
    <div className="container">
      <Modal {...props} size="lg" aria-labelledby="contained-modal v-center">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" style={{textAlign: "center"}}>
            Employee Information - ECN{employee.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://www.brunodecorators.co.za/wp-content/uploads/2023/03/ryan-hoffman-v7Jja2ChN6s-unsplash.jpg" />
            <Card.Body>
              <Card.Title>{employee.name}</Card.Title>
              <Card.Text>
                <b>Email:</b> {employee.email}<br></br>
                <b>Gender:</b> {employee.gender}<br></br>
                <b>Status:</b> {employee.status}<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
