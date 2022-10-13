import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './IconCard.scss';
import Card from '../Card/Card';

const IconCard = ({ icon, title, children, className, style, canInteract }) => {
  return (
    <Card className={className} canInteract={canInteract}>
      <div className={cx(className, 'IconCard')} style={{ ...style }}>
        {icon && <div className="IconCardIcon">{icon}</div>}
        <h4 className={'IconCardHeader'}>{title}</h4>
        <div className={'IconCardContent'}>{children}</div>
      </div>
    </Card>
  );
};

IconCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  canInteract: PropTypes.bool,
};

IconCard.defaultProps = {
  className: null,
  style: {},
  title: null,
  icon: null,
  canInteract: false,
};

export default IconCard;
