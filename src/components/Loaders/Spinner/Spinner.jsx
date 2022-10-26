import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Spinner.scss';
import useThemeProvider from '../../Hooks/useThemeProvider/useThemeProvider';

const Spinner = ({ className, size, color, style, hasCenter }) => {
  const { primaryColor } = useThemeProvider('spinner');

  return (
    <div className={cx('Spinner', className, size)} style={style}>
      <svg className="SpinnerSVG" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="SpinnerCircle" style={{ stroke: color || primaryColor }} cx="50" cy="50" r="46" />
        {hasCenter && (
          <circle className="SpinnerCenter" cx="50" cy="50" r="25" style={{ fill: color || primaryColor }} />
        )}
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'small', 'medium', 'large']),
  style: PropTypes.object,
  color: PropTypes.string,
  hasCenter: PropTypes.bool,
};

Spinner.defaultProps = {
  className: null,
  size: 'small',
  style: {},
  color: null,
  hasCenter: false,
};

export default Spinner;
