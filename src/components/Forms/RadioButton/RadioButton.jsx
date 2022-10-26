import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useThemeProvider from '../../Hooks/useThemeProvider/useThemeProvider';
import './RadioButton.scss';

const RadioButton = ({
  label,
  name,
  value,
  checked = false,
  radioButtonColor,
  radioButtonDisabledColor,
  radioButtonLabelColor,
  radioButtonLabelDisabledColor,
  disabled = false,
  className,
  onChange,
  style,
}) => {
  const { primaryColor, disabledColor, labelColor, labelDisabledColor } = useThemeProvider('radiobutton');
  const buttonColor = radioButtonColor || primaryColor;
  const disabledButtonColor = radioButtonDisabledColor || disabledColor || labelDisabledColor;
  const textColor = radioButtonLabelColor || labelColor;
  const textDisabledColor = radioButtonLabelDisabledColor || labelDisabledColor || disabledColor;

  const id = name + '-' + value;
  const handleChange = () => {
    onChange(!checked, name, value);
  };

  return (
    <div style={{ width: '100%' }}>
      <label
        className={cx('RadioButton', className, { disabled }, { checked })}
        style={{ color: disabled ? textDisabledColor : textColor, ...style }}
        htmlFor={id}
      >
        <input
          className={'RadioButtonInput'}
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
        <span
          tabIndex="0"
          role="radio"
          aria-checked={checked}
          aria-label={label || value}
          className={cx('RadioButtonCustom', { disabled })}
          onKeyDown={(e) => {
            if (!disabled) handleKeyboardEnter(handleChange)(e);
          }}
          style={{
            backgroundColor: checked && (disabled ? disabledButtonColor : buttonColor),
            outline: checked ? null : `2px solid ${disabled ? disabledButtonColor : buttonColor}`,
          }}
        />

        <span className={style.RadioButtonDisplayLabel}>{label || value}</span>
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  radioButtonColor: PropTypes.string,
  radioButtonDisabledColor: PropTypes.string,
  radioButtonLabelColor: PropTypes.string,
  radioButtonLabelDisabledColor: PropTypes.string,
};

RadioButton.defaultProps = {
  label: null,
  name: null,
  value: null,
  checked: false,
  disabled: false,
  className: null,
  onChange: () => {},
  style: {},
  radioButtonColor: null,
  radioButtonDisabledColor: null,
  radioButtonLabelColor: null,
  radioButtonLabelDisabledColor: null,
};

export default RadioButton;
