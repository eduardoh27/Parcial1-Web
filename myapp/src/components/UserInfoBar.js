import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaRunning, FaSwimmer, FaBiking } from 'react-icons/fa'; // Importamos íconos

function UserInfoBar() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from Mock API
    fetch('https://my.api.mockaroo.com/users.json?key=09e62ef0')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data[0]); // Tomamos el primer usuario
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="user-info-bar">
      {userData && (
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={2} md={1}>
              <Image src={userData.imagen_perfil} roundedCircle className="user-avatar" />
            </Col>
            <Col xs={4} md={3}>
              <h4 className="user-name">{userData.full_name}</h4>
            </Col>
            <Col xs={2} className="text-center">
              <FaRunning className="icon" /> <span>{userData.tiempo_corriendo}</span>
            </Col>
            <Col xs={2} className="text-center">
              <FaSwimmer className="icon" /> <span>{userData.tiempo_nadando}</span>
            </Col>
            <Col xs={2} className="text-center">
              <FaBiking className="icon" /> <span>{userData.tiempo_cicla}</span>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default UserInfoBar;
