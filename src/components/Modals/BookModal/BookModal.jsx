import React, { useState } from 'react';
import Modal from "../../../UI/Modal/Modal";
import classes from "./BookModal.module.scss";
import FormDownArrowSVG from './../../../assets/FormDownArrowSVG';
import Footer from './../../Footer/Footer';
import Header from '../../Header/Header';

const BookModal = ({ isOpen, setIsClose }) => {

  const handleSubmit = () => {
    // здесь отправка запроса
    
    setIsClose()
  }

  return (
    <Modal time={0} isClose={!isOpen} className={classes.modal}>
        <form
          action="/submit"
          method="post"
          className={classes.send_form}
        >
          <h2 className="title">Подать заявку</h2>
          <div className={classes.custom_input}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Введите ваше имя"
              required
            />
          </div>
          <div className={classes.custom_input}>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="^\+?[0-9]{1,3}-?[0-9]{1,5}-?[0-9]{1,5}$"
              placeholder="Ваш номер телефона"
              required
            />
          </div>

          <div className={classes.custom_select}>
            <select id="country" name="country">
              <option defaultValue='Разработка веб сайта' disabled>
                Выберите услугу
              </option>
              <option value="Разработка веб сайта">Разработка веб сайта</option>
              <option value="Разработка бота">Разработка бота</option>
              <option value="SMM">SMM</option>
              <option value="SEO">SEO</option>
              <option value="Мобильная разработка">Мобильная разработка</option>
              <option value="Контекстная реклама">Контекстная реклама</option>
            </select>
          </div>
          <div className={classes.custom_textarea}>
            <textarea
              rows="2"
              cols="50"
              id="comment"
              name="comment"
              placeholder="Комментарий"
            />
          </div>

          <button type="submit" className={classes.submit_button} onClick={handleSubmit}>
            Отправить
          </button>
        </form>
        <div className={classes.bottom_arrow}>
          <FormDownArrowSVG />
        </div>
    </Modal>

  );
};

export default BookModal;