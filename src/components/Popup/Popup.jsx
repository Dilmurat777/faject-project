import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { isPathHasString } from "../../utils/isPathHasString"
import classes from './Popup.module.scss'
import SuccessSVG from './../../assets/SuccessSVG';
import FailedSVG from './../../assets/FailedSVG';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

export function Popup({ isOpen, setClose, content }) {
    const Content = content
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
  
    const dispatch = (res) => {
      if (res === 'error') {
        setError(true)
      } else if (res === 'success') {
        setSuccess(true)
      }
    }
  
    const closeModal = () => {
      const isOrder = isPathHasString('order')
      setClose(false);
      if(isOrder) {
        navigate('/')
      }
    };
  
    useEffect(() => {
  
      if (isOpen && (success || error)) {
        const timeoutId = setTimeout(() => {
          setClose(false);
          setSuccess(false)
          setError(false)
        }, 2000);
  
        return () => {
          clearTimeout(timeoutId);
        };
      }
    }, [isOpen, success, error]);
  
    return <>
      {
        isOpen && <div className={classes.modal + ' ' + classes._active}>
          <div className={classes.modal__bg}> </div>
          <div className={classes.modal__wrap}>
            <div className={classes.content}>
              <Header showPopupButton={false}/>
              <div></div>
              <div className={`${classes.modal__container} ${(success === false && error === false) ? classes.form_arrow : ''}`}>
                {(success === false && error === false) && <a className={classes.modal__close} href="#" onClick={closeModal}>
                  <span className={classes.icon_close}>x</span>
                </a>}
                {(success === false && error === false) && <Content isOpen={isOpen} setIsClose={closeModal} dispatch={dispatch} />}
                {success && <Success />}
                {error && <Error />}
              </div>
              <Footer />
            </div>
          </div>
        </div>}
    </>
  
  }
  
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