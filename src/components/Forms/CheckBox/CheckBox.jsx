import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useThemeProvider } from '../../Hooks/useThemeProvider/useThemeProvider';
import './Checkbox.scss';

const CheckBox = ({
  checkboxColor,
  borderRadius,
  borderStyle,
  borderWidth,
  className,
  checked,
  disabled,
  containerStyle,
  label,
  name,
  onClick,
  ref,
  right,
  size,
  style,
  value,
  ...props
}) => {
  const { primaryColor, disabledColor, secondaryColor } = useThemeProvider('checkbox');
  checkboxColor = checkboxColor || primaryColor;

  const handleClick = () => {
    if (disabled) return;
    onClick(value, !checked);
  };

  return (
    <button
      className={cx(className, 'CheckBox', { isDisabled: disabled })}
      style={{
        flexDirection: right ? 'row' : 'row-reverse',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...containerStyle,
      }}
      onClick={() => handleClick()}
    >
      <span
        className={cx(props.labelClassName, 'CheckBoxLabel', { isDisabled: disabled })}
        style={(props.labelStyle, { marginLeft: '8px', color: disabled ? disabledColor : secondaryColor })}
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
            borderColor: disabled ? disabledColor : checkboxColor,
            borderStyle: borderStyle,
            borderRadius: borderRadius,
            ...style,
          }}
        >
          <span className={cx('CheckBoxInputIcon', { isDisabled: disabled, shouldRender: checked })}>
            <div style={{ backgroundColor: disabled ? disabledColor : checkboxColor }} className="CheckBoxIcon" />
          </span>
          <input
            {...props}
            ref={ref}
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
  checkboxColor: PropTypes.string,
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
  containerStyle: PropTypes.object,
  value: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.array]),
};

CheckBox.defaultProps = {
  checkboxColor: null,
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
  containerStyle: {},
  value: '',
  ref: null,
  onClick: () => {},
};

export default CheckBox;
