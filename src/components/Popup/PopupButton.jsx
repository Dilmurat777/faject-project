import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./PopupButton.module.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FormDownArrowSVG from "../../assets/FormDownArrowSVG";
import { useEffect } from "react";
import SuccessSVG from "../../assets/SuccessSVG";
import FailedSVG from "../../assets/FailedSVG";

function concatClassNames(...classNames) {
  return classNames.filter(className => !!className).join(' ');
}

function toggleMenu(method = 'add') {
  document.body.classList[method]('menu-hide');
}

function PopupButton({ content, children, showArrow = true, ...props }) {
  const Content = content;

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = (res) => {
    if (res === 'error') {
      setError(true)
    } else if (res === 'success') {
      setSuccess(true)
    }
  }


  const openModal = () => {
    setIsModalOpen(true);
    toggleMenu()
  };

  const closeModal = () => {
    setIsModalOpen(false);
    toggleMenu('remove')
  };

  const classNames = concatClassNames(classes.bookButton, props.className);

  useEffect(() => {
    toggleMenu('remove')
  }, [])

  useEffect(() => {
    
    if (isModalOpen && (success || error)) {
      const timeoutId = setTimeout(() => {
        setIsModalOpen(false);
        setSuccess(false)
        setError(false)
        toggleMenu('remove')
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isModalOpen, success, error]);


  return (
    <>
      <Button onClick={openModal} className={classNames} {...props}>
        {children}
      </Button>
      {isModalOpen && (
        <div className={classes.modal + ' ' + classes._active}>
          <div className={classes.modal__bg}> </div>
          <div className={classes.modal__wrap}>
            <div className={classes.content}>
              <Header showPopupButton={false} />
              <div className={`${classes.modal__container} ${(success === false && error === false) ? classes.form_arrow : ''}`}>
                {(success === false && error === false) && <a className={classes.modal__close} href="#" onClick={closeModal}>
                  <span className={classes.icon_close}>x</span>
                </a>}
                {(success === false && error === false) && <Content isOpen={isModalOpen} setIsClose={closeModal} dispatch={dispatch} />}
                {success && <Success />}
                {error && <Error />}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupButton;

const Success = () => {
  return (
    <div className={classes.success}>
      <div><p>Обращение в тех. поддержку</p></div> 
      <div><SuccessSVG /></div> 
      <div><p>Заявка успешно отправлена.</p></div> 


    </div>
  )
}

const Error = () => {
  return (
    <div className={classes.success}>
      <div><p>Обращение в тех. поддержку</p></div> 
      <div><FailedSVG /></div> 
      <div><p>Заявка не отправлена.</p></div> 
    </div>
  )
}