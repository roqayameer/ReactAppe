import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { PropTypes } from "prop-types";
export default function Hotel(Props) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-3">
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
    </div>
  );
  Hotel.propTypes={
    text:PropTypes.string,
    title:PropTypes.number
  }
 Hotel.defaultProps = {
    text: 'Stranger'
  };
}
