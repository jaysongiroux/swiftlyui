import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './LinkCard.scss';

const size = {
  width: 320,
};

const LinkCard = ({ className, children, link }) => {
  return (
    <a href={link ?? '#'} className={cx('LinkCard', className)} style={size}>
      {children}
    </a>
  );
};

LinkCard.size = size;

LinkCard.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
};

LinkCard.defaultProps = {
  link: null,
  className: null,
  children: null,
};

export default LinkCard;
