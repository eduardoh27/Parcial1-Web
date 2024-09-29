import React, { useState } from 'react';
import { Card, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import SportSection from './SportSection';
import UserInfoBar from './UserInfoBar';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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
      <Container>
        <Row>
        <Col md={4}>
          <SportSection 
            sportName="Cycling" 
            imageUrl={"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/02/15/17080096883790.jpg"}
            onCardClick={(data) => handleCardClick({ ...data, sportName: 'Cycling' }, "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/02/15/17080096883790.jpg")} 
          />
        </Col>
        <Col md={4}>
          <SportSection 
            sportName="Running" 
            imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfma2_bTHHfh5jN8hkozkc0MHx56PYgMjIA&s"}
            onCardClick={(data) => handleCardClick({ ...data, sportName: 'Running' }, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfma2_bTHHfh5jN8hkozkc0MHx56PYgMjIA&s")} 
          />
        </Col>
        <Col md={4}>
          <SportSection 
            sportName="Swimming" 
            imageUrl={"https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            onCardClick={(data) => handleCardClick({ ...data, sportName: 'Swimming' }, "https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")} 
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
              <Card.Title className="small-card-title overlay-text" style={{fontSize: '2rem'}}>{selectedCard.sportName} Session</Card.Title>
              <Card.Text className="" style={{fontSize: '1.5rem'}}>Recorrido alrededor de la bahía de {selectedCard.ciudad}</Card.Text>
              <Card.Text style={{fontSize: '1.4rem'}}>{selectedCard.longitud}k - {selectedCard.duracion}h</Card.Text>
            </Card.ImgOverlay>
          </Card>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}> 
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <UserInfoBar>
      </UserInfoBar>
      


    </div>
  );
}

export default Home;
