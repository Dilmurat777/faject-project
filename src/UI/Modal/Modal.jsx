import React, {useEffect, useState} from 'react';
import classes from "./Modal.module.scss";

const Modal = ({children, isClose, className, time}) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, time);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showModal &&
                <div className={isClose ? classes.disable : `${classes.modal} ${className}`}>
                    {children}
                </div>
            }
        </div>


    );
};

export default Modal;