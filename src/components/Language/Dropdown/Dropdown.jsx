import s from './Dropdown.module.scss';
import clsx from 'clsx';
import i18n from '../../../i18n';

const locales = {
  en: { title1: 'EN' },
  ru: { title2: 'RU' },
};

const Dropdown = ({ handleLanguageSelect, activeDropdown }) => {
  return (
    <ul
      className={clsx(s.dropdownContent, {
        [s.activeDropdown]: activeDropdown,
      })}
    >
      <li className={s.dropdownContentLi}>
        <div className={s.dropdownContentBtn}>
          {Object.keys(locales).map((locale) => (
            <span
              className={s.buttonLang}
              key={locale}
              onClick={() => {
                handleLanguageSelect(locale);
                i18n.changeLanguage(locale);
              }}
            >
              {locales[locale].title1}
            </span>
          ))}
        </div>
      </li>
      <li className={s.dropdownContentLi}>
        <div className={s.dropdownContentBtn}>
          {Object.keys(locales).map((locale) => (
            <span
              className={s.buttonLang}
              key={locale}
              onClick={() => {
                handleLanguageSelect(locale);
                i18n.changeLanguage(locale);
              }}
            >
              {locales[locale].title2}
            </span>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default Dropdown;
