import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SwimmingSection() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch data from the mock API
    fetch('https://my.api.mockaroo.com/sports.json?key=09e62ef0')
      .then((response) => response.json())
      .then((data) => {
        setActivities(data.slice(0, 10)); // Obtenemos las primeras 10 actividades
      })
      .catch((error) => console.error('Error fetching sports data:', error));
  }, []);

  return (
    <Container className="mt-4">
      <h3>Swimming</h3>
      <Row>
        {activities.map((activity, index) => (
          <Col key={index} md={6} className="mb-4"> {/* Cambiamos el tamaño de la columna */}
            <Card className="cycling-card">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Swimming"
              />
              <Card.Body>
                <Card.Title>Swimming Session</Card.Title>
                <Card.Text>Recorrido alrededor de la bahía de {activity.ciudad}</Card.Text>
                <Card.Text>{activity.longitud}k - {activity.duracion}h</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SwimmingSection;
