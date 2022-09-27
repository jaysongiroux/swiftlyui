import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './RadioButton.scss';

export const RadioButton = ({ label, name, value, checked = false, disabled = false, className, onChange, style }) => {
  const id = name + '-' + value;
  const handleChange = () => {
    onChange(!checked, name, value);
  };

  return (
    <div style={{ width: '100%' }}>
      <label className={cx('RadioButton', className, { disabled }, { checked })} style={style} htmlFor={id}>
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
          className={'RadioButtonCustom'}
          onKeyDown={(e) => {
            if (!disabled) handleKeyboardEnter(handleChange)(e);
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
};
