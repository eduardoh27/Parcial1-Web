import React, { useState } from 'react';
import { Card, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import SportSection from './SportSection';
import UserInfoBar from './UserInfoBar';
import { useTranslation } from 'react-i18next'; 
import LanguageSwitcher from './LanguageSwitcher'; 


function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const { t } = useTranslation(); 

  const handleCardClick = (cardData, imageUrl) => {
    setSelectedCard({ ...cardData, imageUrl });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  return (
    <div>
      <LanguageSwitcher /> 
      <Container>
        <Row>
          <Col md={4}>
            <SportSection 
              sportName={t('home.cycling')} 
              imageUrl={"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/02/15/17080096883790.jpg"}
              onCardClick={(data) => handleCardClick({ ...data, sportName: t('home.cycling') }, "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/02/15/17080096883790.jpg")} 
            />
          </Col>
          <Col md={4}>
            <SportSection 
              sportName={t('home.running')}
              imageUrl={"https://images.squarespace-cdn.com/content/v1/5b4544e485ede17941bc95fc/205ffda8-358f-402f-8186-4c81fe5cf117/running-at-night.jpg"}
              onCardClick={(data) => handleCardClick({ ...data, sportName: t('home.running') }, "https://images.squarespace-cdn.com/content/v1/5b4544e485ede17941bc95fc/205ffda8-358f-402f-8186-4c81fe5cf117/running-at-night.jpg")} 
            />
          </Col>
          <Col md={4}>
            <SportSection 
              sportName={t('home.swimming')} 
              imageUrl={"https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              onCardClick={(data) => handleCardClick({ ...data, sportName: t('home.swimming') }, "https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")} 
            />     
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          {selectedCard && (
            <Card className="mb-2 text-white large-card">
              <Card.Img src={selectedCard.imageUrl} />
              <Card.ImgOverlay className="text-left">
                <Card.Title className="small-card-title overlay-text" style={{fontSize: '2rem'}}>
                  {t('home.session', { sport: selectedCard.sportName })} 
                </Card.Title>
                <Card.Text className="" style={{fontSize: '1.5rem'}}>
                  {t('home.route_around_bay')} {selectedCard.ciudad}
                </Card.Text>
                <Card.Text style={{fontSize: '1.4rem'}}>
                  {selectedCard.longitud}{t('home.distance_unit')} - {selectedCard.duracion}h
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {t('home.close')} 
          </Button>
        </Modal.Footer>
      </Modal>

      <UserInfoBar />
    </div>
  );
}

export default Home;
