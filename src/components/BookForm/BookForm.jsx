import React, { useState } from 'react';
import Modal from "../../UI/Modal/Modal";
import classes from "./BookForm.module.scss";
import FormDownArrowSVG from '../../assets/FormDownArrowSVG';
import { useTranslation } from 'react-i18next';

const BookForm = ({ isOpen, setIsClose, next }) => {
  const { t, i18n } = useTranslation()

  const handleSubmit = () => {
    // здесь отправка запроса
    try {
      next('success')
    } catch (error) {
      next('error')
    }

    // setIsClose()
  }

  return (
      <form
        action="/submit"
        method="post"
        className={classes.send_form}
      >
        <h2 className="title">{t('form.title')}</h2>
        <div className={classes.custom_input}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={`${t('form.placeholder1')}`}
            required
          />
        </div>
        <div className={classes.custom_input}>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="^\+?[0-9]{1,3}-?[0-9]{1,5}-?[0-9]{1,5}$"
            placeholder={`${t('form.placeholder2')}`}
            required
          />
        </div>

        <div className={classes.custom_select}>
          <select id="country" name="country">
            <option defaultValue={`${t('form.placeholder3')}`} disabled>
              {`${t('form.ChooseService')}`}
            </option>
            <option value="Разработка веб сайта">{`${t('form.textForm1')}`}</option>
            <option value="Разработка бота">{`${t('form.textForm2')}`}</option>
            <option value="SMM">SMM</option>
            <option value="SEO">SEO</option>
            <option value="Мобильная разработка">{`${t('form.textForm3')}`}</option>
            <option value="Контекстная реклама">{`${t('form.textForm4')}`}</option>
          </select>
        </div>
        <div className={classes.custom_textarea}>
          <textarea
            rows="2"
            cols="50"
            id="comment"
            name="comment"
            placeholder={`${t('form.placeholder4')}`}
          />
        </div>

        <button type="submit" className={classes.submit_button} onClick={handleSubmit}>
          {`${t('form.send')}`}
        </button>
      </form>

  );
};

export default BookForm;
