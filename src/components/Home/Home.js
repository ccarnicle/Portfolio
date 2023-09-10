import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/developer_activity.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// react using hooks
import { useState, useEffect } from 'react';


function Home() {

  const [width, setWidth] = useState(window.innerWidth); // check width size of the window
  const [homeClassName, setHomeClassName] = useState('home-header'); // check width size of the window
  const [homeDescription, setHomeDescription] = useState('home-about-description'); // check width size of the window
  const [typeStyle, setTypeStyle] = useState({ padding: 50, textAlign: "left" })

  useEffect(()=>{
    if(width < 767){
      setHomeClassName('home-header-mobile'); // Mobile-specific class name
      setTypeStyle({ paddingBottom: 50, paddingRight: 50, paddingLeft: 50, paddingTop: 20, textAlign: "left"})
      setHomeDescription('home-about-description-mobile')
    } else if( width >= 767){
      setHomeClassName('home-header'); // Mobile-specific class name
      setTypeStyle({ padding: 50, textAlign: "left" })
      setHomeDescription('home-about-description')
    }
  }, [width])


  // optional: save the width of the window using state
  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  };

  // call your useEffect
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      };
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className={homeClassName}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> CJ Carnicle</strong>
              </h1>

              <div style={typeStyle}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingTop: 10, paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "325px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 homeDescription = {homeDescription}/>
    </section>
  );
}

export default Home;
