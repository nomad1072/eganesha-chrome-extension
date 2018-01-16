import React from 'react';
import { Card, Container, Col, Row } from 'reactstrap';

const Header = (props) => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <img id="logo-img" src="/assets/images/eganesha-logo.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;