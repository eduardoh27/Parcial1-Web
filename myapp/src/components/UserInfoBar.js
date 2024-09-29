import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaRunning, FaSwimmer, FaBiking } from 'react-icons/fa'; 
import './UserInfoBar.css';

function UserInfoBar() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/users.json?key=34c64d20')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data[0]); 
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="user-info-bar">
      {userData && (
        <Container fluid className="user-info-container">
          <Row className="align-items-center justify-content-center">
            <Col xs={6} md={4}>
              <div className="user-info">
                <Image src={userData.imagen_perfil} roundedCircle className="user-avatar" />
                <h4 className="user-name">{userData.full_name}</h4>
              </div>
            </Col>
            <Col xs={2} className="text-center activity-data">
              <div className="icon-text">
                <FaRunning className="icon" />
                <span className="activity-time">{userData.tiempo_corriendo}</span>
              </div>
            </Col>
            <Col xs={2} className="text-center activity-data">
              <div className="icon-text">
                <FaSwimmer className="icon" />
                <span className="activity-time">{userData.tiempo_nadando}</span>
              </div>
            </Col>
            <Col xs={2} className="text-center activity-data">
              <div className="icon-text">
                <FaBiking className="icon" />
                <span className="activity-time">{userData.tiempo_cicla}</span>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default UserInfoBar;
