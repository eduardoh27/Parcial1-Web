import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RunningSection from './RunningSection';
import CyclingSection from './CyclingSection';
import SwimmingSection from './SwimmingSection';
import UserInfoBar from './UserInfoBar';

function Home() {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <RunningSection />
          </Col>
          <Col md={4}>
            <CyclingSection />
          </Col>
          <Col md={4}>
            <SwimmingSection />
          </Col>
        </Row>
      </Container>

      <UserInfoBar />
    </div>
  );
}

export default Home;
