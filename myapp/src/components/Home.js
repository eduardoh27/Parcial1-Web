import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RunningSection from './RunningSection';
import CyclingSection from './CyclingSection';
import SwimmingSection from './SwimmingSection';
import UserInfoBar from './UserInfoBar'; // Importamos la barra de usuario

function Home() {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          {/* Sección de Running */}
          <Col md={4}>
            <RunningSection />
          </Col>

          {/* Sección de Cycling */}
          <Col md={4}>
            <CyclingSection />
          </Col>

          {/* Sección de Swimming */}
          <Col md={4}>
            <SwimmingSection />
          </Col>
        </Row>
      </Container>

      {/* Barra de información del usuario */}
      <UserInfoBar />
    </div>
  );
}

export default Home;
