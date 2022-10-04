import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './ProgressBar.scss';

const ProgressBar = ({ className, steps, curStep, height, style }) => {
  const widthCalc = (curStep / steps) * 100;
  let widthFill;

  if (widthCalc >= 100) {
    widthFill = '100%';
  } else if (widthCalc < 0 || !widthCalc) {
    widthFill = '0';
  } else {
    widthFill = `${widthCalc}%`;
  }

  return (
    <div className={cx('ProgressBar', className)} style={{ height, ...style }}>
      <div className={'ProgressBarFill'} style={{ width: widthFill }} />
    </div>
  );
};

ProgressBar.propTypes = {
  steps: PropTypes.number.isRequired,
  curStep: PropTypes.number.isRequired,
  height: PropTypes.string,
};

ProgressBar.defaultProps = {
  steps: null,
  curStep: null,
  height: '4px',
};

export default ProgressBar;
