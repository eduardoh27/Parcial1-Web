import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; 
import './SportSection.css'; 

function SportSection({ sportName, imageUrl, onCardClick }) {
  const [sportData, setSportData] = useState([]);
  const { t } = useTranslation(); 

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/sports.json?key=e52222d0')
      .then((response) => response.json())
      .then((data) => {
        setSportData(data.slice(0, 10)); 
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="centered-title">{sportName}</h3> 
      <Row>
        {sportData.map((item, index) => (
          <Col md={6} key={index}>
            <Card className="mb-2 text-white large-card no-padding" onClick={() => onCardClick(item)}>
              <Card.Img src={imageUrl} />
              <Card.ImgOverlay className="text-left">
                <Card.Title className="small-card-title overlay-text" style={{fontSize: '0.7rem'}}>
                  {t('home.session', { sport: sportName })} 
                </Card.Title>
                <Card.Text className="" style={{fontSize: '0.6rem'}}>
                  {t('home.route_around_bay')} {item.ciudad} 
                </Card.Text>
                <Card.Text style={{fontSize: '0.5rem'}}>
                  {item.longitud}{t('home.distance_unit')} - {item.duracion}h 
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SportSection;
