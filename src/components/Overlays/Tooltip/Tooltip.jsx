import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { AiOutlineInfoCircle, AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import './Tooltip.scss';

export const Tooltip = ({
  className,
  place,
  TooltipType,
  effect,
  HoverElementType,
  hoverElementSize,
  hoverElement,
  ...props
}) => {
  const getHoverElement = () => {
    switch (HoverElementType) {
      case 'success':
        return <AiOutlineCheckCircle data-tip="React-tooltip" size={hoverElementSize} className="Tooltip-success" />;
      case 'warning':
        return <AiOutlineWarning data-tip="React-tooltip" size={hoverElementSize} className="Tooltip-warning" />;
      case 'error':
        return <BiErrorCircle data-tip="React-tooltip" size={hoverElementSize} className="Tooltip-error" />;
      default:
      case 'info':
        return <AiOutlineInfoCircle data-tip="React-tooltip" size={hoverElementSize} className="Tooltip-info" />;
    }
  };

  return (
    <div className={cx('Tooltip', className)}>
      {hoverElement ? (
        <div data-tip="React-tooltip" style={{ width: 'fit-content' }}>
          {hoverElement}
        </div>
      ) : (
        getHoverElement()
      )}

      <ReactTooltip place={place} type={TooltipType} effect={effect} {...props} />
    </div>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  TooltipType: PropTypes.oneOf(['dark', 'success', 'warning', 'error', 'info', 'light']),
  effect: PropTypes.oneOf(['float', 'solid']),
  HoverElementType: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  hoverElementSize: PropTypes.string,
  hoverElement: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Tooltip.defaultProps = {
  className: null,
  place: 'left',
  TooltipType: 'dark',
  effect: 'solid',
  HoverElementType: null,
  hoverElementSize: null,
  hoverElement: null,
};
