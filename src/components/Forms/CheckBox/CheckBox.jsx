import React, { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './CheckBox.scss';

const CheckBox = ({
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  className,
  checked,
  disabled,
  containerClassName,
  containerStyle,
  label,
  labelClassName,
  labelStyle,
  name,
  onClick,
  reference,
  right,
  size,
  style,
  value,
  ...props
}) => {
  const { checkBox } = useContext(ThemeContext);
  let color = borderColor || checkBox?.primaryColor;
  if (disabled && checkBox?.disabledColor) {
    color = checkBox?.disabledColor;
  }

  const handleClick = () => {
    if (disabled) return;
    onClick(value, !checked);
  };

  return (
    <button
      className={cx(containerClassName, 'CheckBox', { isDisabled: disabled })}
      style={{
        flexDirection: right ? 'row' : 'row-reverse',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...containerStyle,
      }}
      onClick={() => handleClick()}
    >
      <span
        className={cx(labelClassName, 'CheckBoxLabel', { isDisabled: disabled })}
        style={(labelStyle, { color: disabled ? checkBox?.disabledColor : checkBox?.contentColor })}
      >
        {label}
      </span>
      <span>
        <div
          className={cx('CheckBoxInputContainer', className, { isDisabled: disabled })}
          style={{
            height: size,
            width: size,
            borderWidth: borderWidth,
            borderColor: color,
            borderStyle: borderStyle,
            borderRadius: borderRadius,
            ...style,
          }}
        >
          <span
            className={cx('CheckBoxInputIcon', {
              isDisabled: disabled,
              shouldRender: checked,
            })}
          >
            <div className="CheckBox default-icon" style={{ backgroundColor: borderColor || color }} />
          </span>
          <input
            {...props}
            ref={reference}
            type="checkbox"
            name={name}
            checked={checked}
            value={value}
            disabled={disabled}
            onChange={() => {}}
            hidden
          />
        </div>
      </span>
    </button>
  );
};

CheckBox.propTypes = {
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  right: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  labelStyle: PropTypes.object,
  labelClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  value: PropTypes.string,
  onClick: PropTypes.func,
  reference: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.array]),
};

CheckBox.defaultProps = {
  borderColor: null,
  borderStyle: 'solid',
  borderWidth: '2px',
  borderRadius: '5px',
  checked: false,
  disabled: false,
  right: false,
  name: '',
  size: '18px',
  style: {},
  className: '',
  labelStyle: { marginLeft: '5px' },
  labelClassName: '',
  containerStyle: {},
  containerClassName: '',
  value: '',
  reference: null,
  onClick: null,
};

export default CheckBox;
