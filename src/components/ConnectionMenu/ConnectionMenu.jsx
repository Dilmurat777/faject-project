import { useState } from 'react';
import ContactsStyles from './ConnectionMenu.module.scss';
import { TelegramSVG, InstagramSVG, PhoneSVG, WhatsAppSVG, ContactSVG, CloseSVG } from '../../assets/ConnectionMenuIcons';

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
          {isOpen ? <CloseSVG /> : <ContactSVG />}
        </div>
        <div className={`${ContactsStyles.list} ${isOpen ? ContactsStyles.active : ''}`}>
          <div>
            <a href="tel:+998990277860" target='_blank'>
              <PhoneSVG />
            </a>
          </div>
          <div>
            <a href='https://t.me/faject_studio' target='_blank'>
              <TelegramSVG />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/faject/' target='_blank'>
              <InstagramSVG />
            </a>
          </div>
          <div>
            <a href="https://wa.me/998990277860" target='_blank'>
              <WhatsAppSVG className={ContactsStyles.WhatsApp}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionMenu;
