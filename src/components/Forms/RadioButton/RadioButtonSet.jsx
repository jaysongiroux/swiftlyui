import React, { useContext } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Tooltip from '../../Overlays/Tooltip/Tooltip';
import Label from '../Label/Label';
import RadioButton from './RadioButton';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import './RadioButton.scss';

const RadioButtonSet = ({ value, label, inline, disabled, name, options, onChange, className, helpTipOptions }) => {
  const { checkBox } = useContext(ThemeContext);
  
  const withHelp = !!options.find((opt) => {
    return opt.helptip;
  });

  const helpTip = (option) => {
    return (
      <div>
        <h4>{option.title}</h4>
        <p>{option.text}</p>
      </div>
    );
  };

  return (
    <span className={cx('RadioButtonSet', className)}>
      <Label className={'RadioButtonSetLabel'}>{label}</Label>
      <div className={cx('RadioButtonSetOptionsContainer', inline && 'isInline')}>
        {options.map((option) => {
          const isChecked = option.value === value;
          return (
            <RadioButton
              {...option}
              key={option.value}
              name={name}
              className={cx('RadioButtonSetItem', { withHelp: withHelp })}
              checked={isChecked}
              disabled={option.disabled || disabled}
              label={
                <span className="RadioButtonSetRadioButtonLabel">
                  <div className={cx('RadioButtonSetLabelText', { hasHelp: option.helptip })}>
                    {option.label || option.value}
                  </div>
                  {option.helptip && (
                    <span className="RadioButtonSetTooltip">
                      <Tooltip
                        {...option.helpTipOptions}
                        {...helpTipOptions}
                        hoverElementSize="25px"
                        hoverElementColor={'#7d7d7d'}
                      >
                        {helpTip(option.helptip)}
                      </Tooltip>
                    </span>
                  )}
                </span>
              }
              onChange={() => onChange(option.value, name)}
            />
          );
        })}
      </div>
    </span>
  );
};

RadioButtonSet.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      helptip: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        helpTipOptions: PropTypes.object,
      }),
    }),
  ),
  onChange: PropTypes.func,
  className: PropTypes.string,
  helpTipOptions: PropTypes.object,
};

RadioButtonSet.defaultProps = {
  value: '',
  label: '',
  inline: false,
  disabled: false,
  name: '',
  error: null,
  options: [],
  onChange: () => {},
  className: '',
  helpTipOptions: {},
};

export default RadioButtonSet;
