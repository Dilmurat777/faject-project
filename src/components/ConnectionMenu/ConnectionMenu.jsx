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
            <Button>
              <Phone />
            </Button>
          </div>
          <div>
            <Button>
              <Telegram />
            </Button>
          </div>
          <div>
            <Button>
              <Instagram />
            </Button>
          </div>
          <div>
            <Button>
              <WhatsApp />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionMenu;
