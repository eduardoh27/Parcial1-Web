import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './LanguageSwitcher.css'; 

function LanguageSwitcher() {
  const { i18n } = useTranslation(); 

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); 
  };

  return (
    <div className="language-switcher">
      <button className="language-button" onClick={() => changeLanguage('en')}>English</button>
      <button className="language-button" onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
}

export default LanguageSwitcher;
