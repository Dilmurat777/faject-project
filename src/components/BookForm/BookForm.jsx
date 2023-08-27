import React, { useState } from 'react';
import classes from "./BookForm.module.scss";
import { useTranslation } from 'react-i18next';
import contactAPI from '../../serviceApi/contact.api';
import servicesAPI from './../../serviceApi/services.api';
import { useEffect } from 'react';


const MemoizedSelect = React.memo(function Select({onChange, value}) {
  const { t } = useTranslation()
  const [options, setOptions] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await servicesAPI.getAll()
      setOptions(response)
    }

    fetchData()
  }, [])


  return <div className={classes.custom_select}>
  <select id="service" name="service" defaultValue={'Website development'} value={value} onChange={onChange}>
    <option defaultValue={`${t('form.placeholder3')}`} disabled>
      {`${t('form.ChooseService')}`}
    </option>
    {options.map((option, index)=><option value={option.service_title}>{t(`form.textForm${index+1}`)}</option>)}
    {/* <option value="Website development">{`${t('form.textForm1')}`}</option>
    <option value="Bot development">{`${t('form.textForm2')}`}</option>
    <option value="SMM">SMM</option>
    <option value="SEO">SEO</option>
    <option value="Mobile Development">{`${t('form.textForm3')}`}</option>
    <option value="Contextual advertising">{`${t('form.textForm4')}`}</option> */}
  </select>
</div>
})

const BookForm = ({ dispatch }) => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    comment: ""
  });

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newData = { // TODO: what data key need to use?
      customer_name: formData.name,
      customer_telegram_name: '@test',
      customer_phone_number: formData.phone,
      customer_service_choice: '3'
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
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder={`${t('form.placeholder1')}`}
          required
        />
      </div>
      <div className={classes.custom_input}>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          pattern="^\+?[0-9]{1,3}-?[0-9]{1,5}-?[0-9]{1,5}$"
          placeholder={`${t('form.placeholder2')}`}
          required
        />
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
      <MemoizedSelect value={formData.service} onChange={handleInputChange} /> 
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
