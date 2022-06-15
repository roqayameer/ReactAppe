import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
export default function Main() {
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <h1>Special title treatment</h1>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3">
            <Card>
              <Card.Img variant="top" src="./images/3165.jpg" />
              <Card.Body>
                <Card.Title>Title 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">know more</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3">
            <Card>
              <Card.Img variant="top" src="./images/3165.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3">
            <Card>
              <Card.Img variant="top" src="./images/3165.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3">
            <Card>
              <Card.Img variant="top" src="./images/3165.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
