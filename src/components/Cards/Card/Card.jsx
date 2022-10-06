import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Card.scss';

const size = {
  width: 320,
};

const Card = ({ className, children, canInteract, cardSize, style }) => {
  return (
    <div className={cx('Card', className, { canInteract: canInteract })} style={{ ...cardSize, ...style }}>
      {children}
    </div>
  );
};

Card.size = size;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
  canInteract: PropTypes.bool,
  cardSize: PropTypes.object,
};

Card.defaultProps = {
  className: null,
  children: null,
  canInteract: true,
  cardSize: size,
};

export default Card;
