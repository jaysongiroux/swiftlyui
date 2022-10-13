import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import './Button.scss';

const Button = ({ className, onClick, children, disabled, buttonColor, contentColor, size, ...props }) => {
  const { button } = useContext(ThemeContext);
  const color = buttonColor || button.primaryColor;
  const secondaryColor = contentColor || button?.secondaryColor;

  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={cx('Button', className, { disabled }, size)}
      style={color && { backgroundColor: color }}
      {...props}
    >
      <span style={{ color: secondaryColor }} className={`Button-${className}-content`}>
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
