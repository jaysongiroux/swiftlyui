import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const LinkCard = ({ className, children, link, canInteract }) => {
  return (
    <Card className={cx(className, 'LinkCard')} canInteract={canInteract}>
      <a href={link} style={{ textDecoration: 'none', color: 'black' }}>
        {children}
      </a>
    </Card>
  );
};

LinkCard.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
  canInteract: PropTypes.bool,
};

LinkCard.defaultProps = {
  link: null,
  className: null,
  children: null,
  canInteract: true,
};

export default LinkCard;
