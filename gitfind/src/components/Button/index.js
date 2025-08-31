import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button className="github-button" {...props}>
      {children}
    </button>
  );
};

export default Button;
