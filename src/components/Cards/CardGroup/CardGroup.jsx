import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './CardGroup.scss';

const CardGroup = ({
  title,
  text,
  className,
  titleAlignment,
  cardAlignment,
  spacing,
  maxWidth,
  children,
  ...props
}) => {
  return (
    <div className={cx('CardGroup', className)} ref={props.ref} style={{ maxWidth: maxWidth }}>
      <div style={props.style}>
        {title && (
          <h2
            className={'CardGroupHeader'}
            style={{ textAlign: titleAlignment, paddingLeft: spacing, paddingRight: spacing }}
          >
            {title}
          </h2>
        )}

        {text && (
          <p
            className={'CardGroupText'}
            style={{ textAlign: titleAlignment, paddingLeft: spacing, paddingRight: spacing }}
          >
            {text}
          </p>
        )}

        <div className={'CardGroupContentWrap'} style={{ justifyContent: cardAlignment }}>
          {children.map((child, index) => {
            if (React.isValidElement(child)) {
              return (
                <div
                  key={index}
                  style={{
                    padding: spacing,
                    boxSizing: 'border-box',
                    display: 'flex',
                  }}
                >
                  {child}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

CardGroup.propTypes = {
  title: PropTypes.node,
  text: PropTypes.string,
  titleAlignment: PropTypes.oneOf(['center', 'left', 'right']),
  cardAlignment: PropTypes.oneOf(['center', 'left', 'right']),
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.string,
  className: PropTypes.string,
};

CardGroup.defaultProps = {
  title: null,
  text: null,
  titleAlignment: 'left',
  cardAlignment: 'left',
  spacing: '8px',
  maxWidth: '1200px',
  className: null,
};

export default CardGroup;
