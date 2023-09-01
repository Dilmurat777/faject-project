import s from './Dropdown.module.scss';
import clsx from 'clsx';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';

const locales = {
  en: 'EN',
  ru: 'RU',
};

const Dropdown = ({ handleLanguageSelect, activeDropdown }) => {
  
  const {i18n: {languages}} = useTranslation()
  
  return (
    <ul
      className={clsx(s.dropdownContent, {
        [s.activeDropdown]: activeDropdown,
      })}
    >
      {languages.map((lang, index)=>
      <li className={s.dropdownContentLi} key={index}>
        <div className={s.dropdownContentBtn}>
            <span
              className={s.buttonLang}
              key={lang}
              onClick={() => {
                handleLanguageSelect(lang);
              }}
            >
              {locales[lang]}
            </span>
        </div>
      </li>
      )}
    </ul>
  );
};

export default Dropdown;
