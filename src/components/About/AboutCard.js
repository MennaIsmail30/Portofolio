import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Menna Ismail </span>
            from <span className="purple"> Sohag, Egypt.</span>
            <br />
            I am Front End Developer and  currently employed as an External Instructor  at Information Technology Institute (ITI) Sohag Branch    .

            <br />

          </p>




        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
