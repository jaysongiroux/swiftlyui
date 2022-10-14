import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useThemeProvider } from '../../Hooks/useThemeProvider/useThemeProvider';
import './ProgressBar.scss';

const ProgressBar = ({ className, color, backgroundColor, steps, curStep, height, style }) => {
  const { primaryColor, secondaryColor } = useThemeProvider('progressbar');

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
    <div
      className={cx('ProgressBar', className)}
      style={{ height, ...style, backgroundColor: backgroundColor || secondaryColor }}
    >
      <div className={'ProgressBarFill'} style={{ width: widthFill, backgroundColor: color || primaryColor }} />
    </div>
  );
};

ProgressBar.propTypes = {
  steps: PropTypes.number.isRequired,
  curStep: PropTypes.number.isRequired,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  steps: null,
  curStep: null,
  height: '4px',
  color: null,
  backgroundColor: null,
};

export default ProgressBar;
