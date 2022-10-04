import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

const Button = ({ className, onClick, children, disabled, buttonColor, contentColor, size, ...props }) => {
  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={cx('Button', className, { disabled }, size)}
      style={buttonColor && { backgroundColor: buttonColor }}
      {...props}
    >
      <span style={{ color: contentColor }} className={`Button-${className}-content`}>
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  buttonColor: PropTypes.string,
  contentColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  className: null,
  onClick: () => {},
  disabled: false,
  buttonColor: null,
  contentColor: null,
  size: 'medium',
};

export default Button;
