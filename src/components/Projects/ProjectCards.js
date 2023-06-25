import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {!props.isBlog && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {"\n"}
        {"\n"}

        {!props.isBlog && props.webLink && (
          <Button
            variant="primary"
            href={props.webLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Website"}
          </Button>
        )}

        {/* Need to change the button below to a TV or Youtube sign*/}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; 
            {"Demo"}
          </Button>
        )}

        {/* Change the sign below */}

        {!props.isBlog && props.marketplaceLink && (
          <Button
            variant="primary"
            href={props.marketplaceLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; 
            {"Marketplace"}
          </Button>
        )}

          {/* Change the sign below */}

          {!props.isBlog && props.contractLink && (
          <Button
            variant="primary"
            href={props.contractLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; 
            {"Contract"}
          </Button>
        )}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
