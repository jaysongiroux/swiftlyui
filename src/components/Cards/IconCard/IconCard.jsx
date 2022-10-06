import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './IconCard.scss';

const size = {
  width: 320,
  height: 260,
};

const IconCard = ({ icon, title, children, className, style }) => {
  return (
    <div className={cx(className, 'IconCard')} style={Object.assign({}, size, style)}>
      <div className="IconCardIcon">{icon}</div>
      <h4 className={'IconCardHeader'}>{title}</h4>
      <div className={'IconCardContent'}>{children}</div>
    </div>
  );
};

IconCard.size = size;

IconCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

IconCard.defaultProps = {
  className: null,
  style: {},
  children: null,
  title: '',
  icon: null,
};

export default IconCard;
