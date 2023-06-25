import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nft from "../../Assets/Projects/nft.png";
import ais from "../../Assets/Projects/ais.png";
import aisv1 from "../../Assets/Projects/aisv1.png";
import nftix from "../../Assets/Projects/nftickets.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={ais}
              isBlog={false}
              title="aiSports - Crypto Fantasy Sports"
              description="aiSports is a daily fantasy sports (DFS) platform built on the blockchain. Users enter in the day’s contests and win crypto rewards. In it's first season, aiSports averaged 3.5k Monthly Active Users. I've built aiSports using React, Node.js, GCP, Solidity and Cadence."
              //description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              webLink="https://aisportspro.com" 
              demoLink="https://youtu.be/Z_XXRQnep74" //change this to the latest demo youtube
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="AI Generated NFTs"
              description="Using Stable Diffusion, I created a set of 2000 AI generated Digital Collectibles. These NFTs are live on the Flow blockchain and feature unique images of 20 different NBA players in 5 different scenarios. Our collectibles have sold for up to $200 on the Flowty marketplace."
              //description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              marketplaceLink="https://www.flowty.io/collection/0xabe5a2bf47ce5bf3/aiSportsMinter"
              contractLink="https://flow-view-source.com/mainnet/account/0xabe5a2bf47ce5bf3/contract/aiSportsMinter"
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={nftix}
              isBlog={false}
              title="NFTickets"
              description= "Our entry into ETH Denver 2022 aimed to be the EventBrite of web3. NFTickets is an all in one platform that utilizes NFTs to revolutionize the ticketing industry. In one week, we built a working prototype on the Polygon network and won $1500 of prizes in the hackathon."
              ghLink="https://github.com/ccarnicle/nftickets"
              demoLink="https://www.youtube.com/watch?v=Ygopuamzetg"              
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={aisv1}
              isBlog={false}
              title="aiSports V1 on Ethereum"
              description="I originally built AI sports around a Machine Learning algorithm that I developed utlizing GCP's Vertex-AI service. This gave me accurate predictions for every NBA player, every day. I used the predictions to create CryptoDFS and launched the first version on Etherium testnet."
              webLink="https://fantasyball-ahqsoecnu-ccarnicle.vercel.app/"
              demoLink="https://youtu.be/Cc45p_9ombo"
            />
          </Col>

          { /*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
