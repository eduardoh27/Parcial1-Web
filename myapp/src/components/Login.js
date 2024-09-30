import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import LanguageSwitcher from './LanguageSwitcher'; 
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation(); 
  const navigate = useNavigate(); 

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      window.alert(t('login.invalid_email')); 
    } else if (password.length < 8) {
      window.alert(t('login.invalid_password'));
    } else {
      navigate('/home'); 
    }
  };

  return (
    <div className="login-background">
      <LanguageSwitcher /> 
      <Container className="login-container">
        <Card className="login-card"> 
          <Card.Body>
            <h4 className="text-start mb-4 login-title">{t('login.title')}</h4>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Label>{t('login.email')}</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>{t('login.password')}</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="login-button mt-3">
                {t('login.button')}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
