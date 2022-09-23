import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Label.scss';

export const Label = ({ children, disabled, ...props }) => {
  return (
    <label {...props} className={cx('Label', props.className, { disabled })}>
      <span className={'LabelText'}>{children}</span>
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
};
Label.defaultProps = {
  children: null,
  disabled: false,
};