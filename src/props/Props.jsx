import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
export default function Props(Props) {
  return (
    <div>
      {" "}
      <div className="col-lg-3 my-3  ">
        <Card>
          <Card.Img variant="top" src={Props.imgsrc} />
          <Card.Body>
            <Card.Title>{Props.title}</Card.Title>
            <Card.Text>{Props.text}</Card.Text>
            <Button variant="primary">{Props.btn}</Button>
            <p>{Props.id}</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
