import React, { useEffect, useState } from 'react';
import classes from "./BookForm.module.scss";
import { useTranslation } from 'react-i18next';
import contactAPI from '../../serviceApi/contact.api';
import Input from '../../UI/Input/Input';
import ServiceSelect from '../ServiceSelect/ServiceSelect';

const BookForm = ({ dispatch }) => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    comment: ""
  });

  const handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if(name === 'phone') {
      if(value.length === 1 && !value.includes('+')) {
        value = '+' + value
      } else {
        value
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const newData = {
      customer_name: formData.name,
      // customer_telegram_name: '@test',
      customer_phone_number: formData.phone,
      customer_service_choice: formData.service,
      comment: formData.comment
    }

    try {
      await contactAPI.book(newData)
      dispatch('success')
    } catch (error) {
      dispatch('error')
    }
  }

  return (
    <form
      className={classes.send_form}
      onSubmit={handleSubmit}
    >
      <h2 className="title">{t('form.title')}</h2>
      <div className={classes.custom_input}>
        <Input id="name" name="name" value={formData.name} setValue={handleInputChange} placeholder={`${t('form.placeholder1')}`} required/>
      </div>
      <div className={classes.custom_input}>
        <Input 
          type="tel"
          id="phone"
          name="phone"
          title='Format: +1234567890'
          value={formData.phone}
          setValue={handleInputChange} 
          pattern="^\+[0-9]{1,6}-?[0-9]{1,14}$" 
          placeholder={`${t('form.placeholder2')}`} 
          required={true}
        />
        {/* <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          pattern="^\+?[0-9]{1,3}-?[0-9]{1,5}-?[0-9]{1,5}$"
          placeholder={`${t('form.placeholder2')}`}
          required
        /> */}
      </div>
      {/* <div className={classes.custom_input}>
          <input
            type="text"
            id="telegram"
            name="telegram"
            pattern="^@[\w\d_]{4,149}$"
            placeholder={`${t('form.placeholder5')}`}
          />
        </div> */}
      <ServiceSelect value={formData.service} onChange={handleInputChange} isRequired={true} />
      <div className={classes.custom_textarea}>
        <textarea
          rows="2"
          cols="50"
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder={`${t('form.placeholder4')}`}
        />
      </div>
      <button type="submit" className={classes.submit_button}>
        {`${t('form.send')}`}
      </button>
    </form>

  );
};

export default BookForm;
