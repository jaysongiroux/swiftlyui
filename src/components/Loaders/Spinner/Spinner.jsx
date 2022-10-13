import React, { useContext } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import './Spinner.scss';

const Spinner = ({ className, size, color, style }) => {
  const { spinner } = useContext(ThemeContext);
  const spinnerColor = color || spinner?.primaryColor;
  return (
    <div className={cx('Spinner', className, size)} style={style}>
      <svg className="SpinnerSVG" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="SpinnerCircle" style={{ stroke: spinnerColor }} cx="50" cy="50" r="46" />
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.object,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  className: null,
  size: 'small',
  style: {},
  color: null,
};

export default Spinner;
