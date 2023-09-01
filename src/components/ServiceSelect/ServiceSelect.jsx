import React, { useState,useEffect } from "react"
import { useTranslation } from "react-i18next"
import servicesAPI from "../../serviceApi/services.api"
import classes from "./ServiceSelect.module.scss";
import useServiceOptions from "../../hooks/useServiceOptions";

const ServiceSelect = ({ onChange, value, isRequired }) => {
    const { t } = useTranslation()
    const [options] = useServiceOptions([])


    return <div className={classes.custom_select}>
        <select id="service" name="service" value={value === '' ? t('form.ChooseService') : value} onChange={onChange} required={isRequired} >
            <option disabled>
                {`${t('form.ChooseService')}`}
            </option>
            {options.map((option, index) => <option key={option.id} value={option.id}>{t(`form.textForm${index + 1}`)}</option>)}
        </select>
    </div>
}


export default React.memo(ServiceSelect)