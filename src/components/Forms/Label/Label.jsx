import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Label.scss';

const Label = ({ children, disabled, labelColor, labelDisabledColor, ...props }) => {
  return (
    <label {...props} className={cx('Label', props.className, { disabled })}>
      <span className={'LabelText'} style={{ color: disabled ? labelDisabledColor : labelColor }}>
        {children}
      </span>
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  labelColor: PropTypes.string,
  labelDisabledColor: PropTypes.string,
};

Label.defaultProps = {
  children: null,
  labelColor: null,
  labelDisabledColor: null,
  disabled: false,
};

export default Label;
