import React from "react";
import Card from "react-bootstrap/Card";

function WorkItem({ title, imgSrc, deployedSrc, gitHubSrc }) {
  return (
    <Card className="bg-dark text-white" style={{ width: "18rem" }}>
      <Card.Img src={imgSrc} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default WorkItem;
