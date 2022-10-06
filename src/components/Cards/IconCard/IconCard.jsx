import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './IconCard.scss';
import Card from '../Card/Card';

const size = {
  width: 320,
  height: 260,
};

const IconCard = ({ icon, title, children, className, style, canInteract }) => {
  return (
    <Card className={className} canInteract={canInteract}>
      <div className={cx(className, 'IconCard')} style={Object.assign({}, size, style)}>
        <div className="IconCardIcon">{icon}</div>
        <h4 className={'IconCardHeader'}>{title}</h4>
        <div className={'IconCardContent'}>{children}</div>
      </div>
    </Card>
  );
};

IconCard.size = size;

IconCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  canInteract: PropTypes.bool,
};

IconCard.defaultProps = {
  className: null,
  style: {},
  children: null,
  title: '',
  icon: null,
  canInteract: false,
};

export default IconCard;
