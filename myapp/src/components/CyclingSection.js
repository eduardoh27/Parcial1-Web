import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function CyclingSection() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/sports.json?key=09e62ef0')
      .then((response) => response.json())
      .then((data) => {
        setActivities(data.slice(0, 10));
      })
      .catch((error) => console.error('Error fetching sports data:', error));
  }, []);

  return (
    <Container className="mt-4">
      <h3>Cycling</h3>
      <Row>
        {activities.map((activity, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card className="cycling-card">
              <Card.Img 
                variant="top" 
                src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/02/15/17080096883790.jpg" 
                alt="Cycling"
              />
              <Card.Body>
                <Card.Title>Running Session</Card.Title>
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

export default CyclingSection;
