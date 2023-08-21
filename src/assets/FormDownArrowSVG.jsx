import React from 'react';

const FormDownArrowSVG = () => {
  return (
    <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_12" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="22">
        <rect width="36" height="22" fill="white" />
      </mask>
      <defs>
        <filter id="filter0_b_6_12" x="-199" y="-433" width="434" height="476.453" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="11" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6_12" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6_12" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default FormDownArrowSVG;