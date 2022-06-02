import React from "react";
import WorkItem from "../WorkItem";

export default function Work() {
  return (
    <div className="container">
      <h1>My Work</h1>
      <div className="row">
        <div className="col-12">
          <WorkItem
            title={"Test1"}
            imgSrc={"/images/test.png"}
            deployedSrc={"https://daveceddia.com/react-image-tag/"}
            gitHubSrc={"https://daveceddia.com/react-image-tag/"}
          />
        </div>
        <div className="col-12 col-md-6">
          <WorkItem
            title={"Test1"}
            imgSrc={"/images/test.png"}
            deployedSrc={"https://daveceddia.com/react-image-tag/"}
            gitHubSrc={"https://daveceddia.com/react-image-tag/"}
          />
        </div>
        <div className="col-12 col-md-6">
          <WorkItem
            title={"Test1"}
            imgSrc={"/images/test.png"}
            deployedSrc={"https://daveceddia.com/react-image-tag/"}
            gitHubSrc={"https://daveceddia.com/react-image-tag/"}
          />
        </div>
        <div className="col-12 col-md-6">
          <WorkItem
            title={"Test1"}
            imgSrc={"/images/test.png"}
            deployedSrc={"https://daveceddia.com/react-image-tag/"}
            gitHubSrc={"https://daveceddia.com/react-image-tag/"}
          />
        </div>
        <div className="col-12 col-md-6">
          <WorkItem
            title={"Test1"}
            imgSrc={"/images/test.png"}
            deployedSrc={"https://daveceddia.com/react-image-tag/"}
            gitHubSrc={"https://daveceddia.com/react-image-tag/"}
          />
        </div>
      </div>
    </div>
  );
}
