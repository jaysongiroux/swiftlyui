import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Checkbox.scss';

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
  icon,
  ...props
}) => {
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
      <span className={cx(labelClassName, 'CheckBoxLabel', { isDisabled: disabled })} style={labelStyle}>
        {label}
      </span>
      <span>
        <div
          className={cx('CheckBoxInputContainer', className, { isDisabled: disabled })}
          style={{
            height: size,
            width: size,
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderRadius: borderRadius,
            ...style,
          }}
        >
          <span className={cx('CheckBoxInputIcon', { isDisabled: disabled, shouldRender: checked })}>{icon}</span>
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
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  icon: <div className="CheckBox default-icon" />,
};

export default CheckBox;
