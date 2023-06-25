import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/IMG_8978.JPG";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2({homeDescription}) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className={homeDescription}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I took my first programming class 14 years old and it's been a part of my life ever since.
              <br />
              <br />I gratuated college in 2011 with a degree in Computer Engineering from the Univerisity of Texas. While in school I learned 
              <i>
                <b className="purple"> C, C++, Java and Computer Design.</b>
              </i>
              <br />
              <br />
              After college, I spent 9 years as a Technical Account Manager at {" "}
              <b className="purple">Texas Instruments</b> where I grew my book of business from {" "}
              <b className="purple">
              $5M to over $40M annually.
              </b>
              
              <br />
              <br />
              For the last 4 years, I've spent my time as an <b className="orange">Entreprenuer and Consultant</b> building mobile and web apps. I've utilized
              <i>
                <b className="purple">
                  {" "}
                  Javascript, React and Next.js
                </b>
              </i>{" "}
              along side 
              <i>
                <b className="purple"> Firebase, Node.js and Blockchain programming</b> {" "}
              </i>
              to build elegant and responsive applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="avatar" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span> <a className="maillink"  href = "mailto:cjcarnicle@gmail.com">email</a> </span>or
            </p>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ccarnicle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ccarnicle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ccarnicle/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ccarnicle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
