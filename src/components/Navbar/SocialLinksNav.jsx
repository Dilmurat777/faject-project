import InstagramNav from '../../assets/SocialImagesNavbar/InstagramNav';
import TelegramNav from '../../assets/SocialImagesNavbar/TelegramNav';
import WhatsAppNav from '../../assets/SocialImagesNavbar/WhatsAppNav';
import s from './Navbar.module.scss';


const SocialLinks = () => {

  return (
 
      <div className={s.navbarSocial}>
        <a href="https://www.instagram.com/faject/" target="_blank" >
          <InstagramNav />
        </a>
        <a href="https://t.me/faject_studio" target="_blank" >
          <TelegramNav />
        </a>
        <a href="https://wa.me/998990277860" target="_blank" >
          <WhatsAppNav />
        </a>
      </div>

  );
};

export default SocialLinks;
