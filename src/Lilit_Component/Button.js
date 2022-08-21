import React from 'react';
import './Button.css';

const Button = ({
   label,
   type,
   disabled = false,
   handleClick,
   classNames,
   data
}) => {
   return (
      <button
         className={classNames}
         onClick={() => handleClick(data)}
         type={type}
         disabled={disabled}
      >
         {label}
      </button>
   )
}

export default Button;