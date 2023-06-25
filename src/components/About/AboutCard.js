import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I grew up and went to college in <span className="purple">Texas</span>{" "}
            then spent 9 years in <span className="purple">San Francisco.</span> I am currently a Digital Nomad and spend the majority of my time across <span className="purple"> the US and Mexico.</span>
            <br />
            <br />
            Over the last 4 years, I have held a part time consulting gig while building my Web3 Fantasy Sports App - <a className="maillink"  href = "https://aisportspro.com">aiSports.</a> In our first season, aiSports has grown to over 3.5k Monthly Active Users.
            <br />
            <br />
            In addition to the skillsets below, I've utilzed these technologies to build aiSports:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> AI SDKs - ChatGPT and Stable Diffusion
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain Programming - Ethereum (Solidity) & Flow (Cadence)
            </li>
            <li className="about-activity">
              <ImPointRight /> Google Cloud Platform - Vertex-AI, Firebase, BigQuery
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
