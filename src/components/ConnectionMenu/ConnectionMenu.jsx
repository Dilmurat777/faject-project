import { useState } from 'react';
import {
  Close,
  Contact,
  Instagram,
  Phone,
  Telegram,
  WhatsApp,
} from '../../assets/ConnectionMenuIcons/ConnectionMenuIconsSVG';
import ContactsStyles from './ConnectionMenu.module.scss';
import Button from '../../UI/Button/Button';

const ConnectionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`wrapper ${ContactsStyles.wrapper}`}>
      <div className={`${ContactsStyles.menu_wrapper}`}>
        <div
          className={`${ContactsStyles.share_button} ${isOpen ? ContactsStyles.open : ''}`}
          onClick={toggleMenu}>
          {isOpen ? <Close /> : <Contact />}
        </div>
        <div className={`${ContactsStyles.list} ${isOpen ? ContactsStyles.active : ''}`}>
          <div>
            <a href="tel:+998990277860" target='_blank'>
              <Phone />
            </a>
          </div>
          <div>
            <a href='https://t.me/faject_studio' target='_blank'>
              <Telegram />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/faject/' target='_blank'>
              <Instagram />
            </a>
          </div>
          <div>
            <a href="https://wa.me/998990277860" target='_blank'>
              <WhatsApp className={ContactsStyles.WhatsApp}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionMenu;
