import s from './Language.module.scss';
import { useState } from 'react';
import LanguageSelectSVG from '../../assets/LanguageSelectSVG.jsx';
import { motion } from 'framer-motion';
import Dropdown from './Dropdown/Dropdown.jsx';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Language = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const i18n = useTranslation();
  const { language, languages } = i18n.i18n;
  const [selectedLanguage, setSelectedLanguage] = useState(language === 'ru' ? 'RU' : 'EN');



  useEffect(() => {

    setSelectedLanguage(language === 'ru' ? 'RU' : 'EN')
  }, [language])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language === 'ru' ? 'RU' : 'EN');
    setShowDropdown(false);
  };
// debugger
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className={s.dropdown}>
        <div className={s.navbarDropMenu} onClick={toggleDropdown}>
          <LanguageSelectSVG />
          <h4 className={s.language}>{selectedLanguage}</h4>
        </div>
        {showDropdown && (
          <Dropdown handleLanguageSelect={handleLanguageSelect} activeDropdown={showDropdown} />
        )}
      </div>
    </motion.div>
  );
};

export default Language;
