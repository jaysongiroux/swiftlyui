import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import './ProgressBar.scss';

const ProgressBar = ({ className, steps, curStep, height, style, fillColor, backgroundColor }) => {
  const { progressBar } = useContext(ThemeContext);
  const color = fillColor || progressBar?.primaryColor;
  const bgColor = backgroundColor || progressBar?.secondaryColor;

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
    <div className={cx('ProgressBar', className)} style={{ height, backgroundColor: bgColor, ...style }}>
      <div className={'ProgressBarFill'} style={{ width: widthFill, backgroundColor: color }} />
    </div>
  );
};

ProgressBar.propTypes = {
  steps: PropTypes.number.isRequired,
  curStep: PropTypes.number.isRequired,
  height: PropTypes.string,
  fillColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  steps: null,
  curStep: null,
  height: '4px',
  fillColor: null,
  backgroundColor: null,
};

export default ProgressBar;
