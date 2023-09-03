import React, { useContext } from "react";
import Button from "../../../UI/Button/Button";
import { PopupContext } from "../../../App";


function concatClassNames(...classNames) {
  return classNames.filter(className => !!className).join(' ');
}

function PopupButton({ children, ...props }) {
  const classNames = concatClassNames( props.className);

  const {setIsModal} = useContext(PopupContext)
  return (
    <>
      <Button onClick={()=>setIsModal((prev)=>!prev)} className={classNames} {...props}>
        {children}
      </Button>
      
    </>
  );
}

export default PopupButton;

