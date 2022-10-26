import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './TextInput.scss';
import useThemeProvider from '../../Hooks/useThemeProvider/useThemeProvider';
import Label from '../Label/Label';

const TextInput = ({
  className,
  type,
  value,
  rows,
  ref,
  disabled,
  placeholder,
  onChange,
  label,
  error,
  style,
  labelStyle,
  inputStyle,
  ...props
}) => {
  const { primaryColor, disabledColor, labelColor, inputColor } = useThemeProvider('textinput');
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const Input = type === 'textarea' ? 'textarea' : 'input';
  return (
    <>
      <div
        className="TextInputContainer"
        style={{ ...style, border: `2px solid ${disabled ? disabledColor : primaryColor} ` }}
      >
        <Label
          className="TextInputLabel"
          disabled={disabled}
          labelColor={labelColor}
          labelDisabledColor={disabledColor}
          style={{ ...labelStyle }}
        >
          {label}
        </Label>

        <Input
          ref={ref}
          value={value}
          type={type}
          disabled={disabled}
          aria-label={label}
          className={cx('TextInput', { disabled }, className, error && 'hasError')}
          onChange={handleChange}
          rows={rows}
          style={{ color: disabled ? disabledColor : inputColor, ...inputStyle }}
          {...props}
        />
      </div>
    </>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'textarea', 'password', 'email', 'number']),
  value: PropTypes.string,
  rows: PropTypes.number,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  style: PropTypes.object,
  error: PropTypes.bool,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

TextInput.defaultProps = {
  className: null,
  type: 'text',
  value: '',
  rows: 1,
  ref: null,
  disabled: false,
  placeholder: null,
  onChange: () => {},
  label: null,
  style: {},
  error: false,
  inputStyle: {},
  labelStyle: {},
};

export default TextInput;
