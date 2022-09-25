import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './TextInput.scss';
import { Label } from '../Label/Label';

export const TextInput = ({
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
  labelPosition,
  labelStyle,
  ...props
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const Input = type === 'textarea' ? 'textarea' : 'input';
  return (
    <>
      {labelPosition === 'top' && (
        <Label className="TextInputLabel" disabled={disabled} style={{ ...labelStyle }}>
          {label}
        </Label>
      )}
      <div className="TextInputContainer" style={{ ...style }}>
        {labelPosition === 'inside' && (
          <Label className="TextInputLabel" disabled={disabled} style={{ ...labelStyle }}>
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          value={value}
          type={type}
          disabled={disabled}
          aria-label={label}
          className={cx('TextInput', { disabled }, className, error && 'hasError')}
          onChange={handleChange}
          rows={rows}
          style={props.inputStyle}
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
  labelPosition: PropTypes.oneOf(['top', 'inside']),
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
  onChange: undefined,
  label: null,
  style: {},
  error: false,
  labelPosition: 'top',
  labelStyle: {},
};
