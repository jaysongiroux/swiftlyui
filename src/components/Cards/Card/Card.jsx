import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ className, children, canInteract, cardSize, style }) => {
  return (
    <div className={cx('Card', className, { canInteract: canInteract })} style={{ ...cardSize, ...style }}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  canInteract: PropTypes.bool,
  cardSize: PropTypes.object,
  style: PropTypes.object,
};

Card.defaultProps = {
  className: null,
  canInteract: true,
  cardSize: {
    width: 320,
  },
  style: {},
};

export default Card;
