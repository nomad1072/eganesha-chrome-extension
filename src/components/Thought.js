import React from 'react'
import { Container, Row, Col } from 'reactstrap';
const Thought = (props) => {
  return (
    <Container>
      <Row>
        <Col id="thought-holder">
          <span id="thought-for-the-day">Thought for the day</span>
        </Col>
      </Row>
      <Row>
        <Col id="thought-text-holder">
          <span id="thought-text">When storms of passions rage enveloping you in their furious blasts and the world appears to you to be a hotbed of burning coals, when failure and despair stare you in the face, one healing thought of God, His unbounded mercy and grace, can at once bring you tranquility, sunshine and cheer, and thereby transform your entire outlook upon the world and make your life blessed and glorious.</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <img id="profile-pic" src="/assets/images/swami_vivekananda.jpg" />>
        </Col>
      </Row>
      <Row>
        <Col id="by-holder">
          <span id="by-person-text"> Swami Ramdas</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Thought;