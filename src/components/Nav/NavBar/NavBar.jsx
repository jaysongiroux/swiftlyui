import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './NavBar.scss';

const NavBar = ({ className, children, sticky, style, ...props }) => {
  return (
    <div {...props} style={style} className={cx('NavBar', className, { sticky })}>
      {children}
    </div>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  sticky: PropTypes.bool,
  style: PropTypes.object,
};

NavBar.defaultProps = {
  className: null,
  children: null,
  sticky: false,
  style: {},
};

export default NavBar;
