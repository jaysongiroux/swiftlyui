import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import useThemeProvider from '../../Hooks/useThemeProvider/useThemeProvider';
import Label from '../Label/Label';
import './Switch.scss';

const Switch = ({ label, className, value, options, buttonStyle, labelStyle, onChange, disabled }) => {
  const { primaryColor, textColor, disabledTextColor, selectedTextColor, secondaryColor, disabledColor } =
    useThemeProvider('switch');

  return (
    <div className={cx('Switch', className)}>
      <Label className="SwitchLabel" style={{ labelStyle }}>
        {label}
      </Label>
      <div className="SwitchWrapper">
        {options.map((option) => {
          const selected = option.value === value;
          const backgroundColorItem = disabled
            ? disabledColor ?? '#d6d6d6'
            : selected
            ? primaryColor ?? '#3f51b5'
            : secondaryColor ?? '#e4e4e4';
          const textColorItem = disabled
            ? disabledTextColor ?? 'white'
            : selected
            ? selectedTextColor ?? 'white'
            : textColor ?? 'black';
          return (
            <button
              className={cx('SwitchWrapperButton', { selected: option.value === value, disabled })}
              onClick={() => (disabled ? () => {} : onChange(option.value))}
              style={{ ...buttonStyle, backgroundColor: backgroundColorItem, color: textColorItem }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Switch.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

Switch.defaultProps = {
  label: null,
  className: null,
  value: null,
  options: [],
  disabled: false,
  buttonStyle: {},
  labelStyle: {},
};

export default Switch;
