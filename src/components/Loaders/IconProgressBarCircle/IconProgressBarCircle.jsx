import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useThemeProvider from '../../Hooks/useThemeProvider/useThemeProvider';
import './IconProgressBarCircle.scss';

const IconProgressBarCircle = ({
  className,
  size,
  progress,
  trackWidth,
  trackColor,
  indicatorWidth,
  indicatorColor,
  indicatorCap,
  showPercentage,
  children,
}) => {
  const { primaryColor, secondaryColor } = useThemeProvider('iconprogressbarcircle');
  const loadingBarColor = indicatorColor || primaryColor;
  const backgroundTrackColor = trackColor || secondaryColor;
  const center = size / 2,
    radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  return (
    <div className={cx('IconProgressCircle-wrapper', className)} style={{ width: size, height: size }}>
      <svg className="IconProgressCircle" style={{ width: size, height: size }}>
        <circle
          className="IconProgressCircle-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          style={{ stroke: backgroundTrackColor }}
          strokeWidth={trackWidth}
        />
        <circle
          className={`IconProgressCircle-indicator`}
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          style={{ stroke: loadingBarColor }}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
        />
      </svg>

      <div className="IconProgressCircle-label">
        {children}
        {showPercentage && (
          <span className="IconProgressCircle-label__progress">{`${progress > 100 ? 100 : progress}%`}</span>
        )}
      </div>
    </div>
  );
};

IconProgressBarCircle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  progress: PropTypes.number,
  trackWidth: PropTypes.number,
  trackColor: PropTypes.string,
  indicatorWidth: PropTypes.number,
  indicatorColor: PropTypes.string,
  indicatorCap: PropTypes.oneOf(['butt', 'round', 'square']),
  label: PropTypes.string,
  showPercentage: PropTypes.bool,
};

IconProgressBarCircle.defaultProps = {
  className: '',
  size: 150,
  progress: 0,
  trackWidth: 10,
  trackColor: null,
  indicatorWidth: 10,
  indicatorColor: null,
  indicatorCap: `round`,
  showPercentage: true,
};

export default IconProgressBarCircle;
