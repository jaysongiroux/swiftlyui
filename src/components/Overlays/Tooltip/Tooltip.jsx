import React, { Children, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { AiOutlineInfoCircle, AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import { BiErrorCircle, BiHelpCircle } from 'react-icons/bi';
import './Tooltip.scss';

const Tooltip = ({
  className,
  place,
  TooltipType,
  effect,
  HoverElementType,
  hoverElementSize,
  hoverElement,
  hoverElementColor,
  children,
  ...props
}) => {
  const getHoverElement = () => {
    switch (HoverElementType) {
      case 'success':
        return (
          <AiOutlineCheckCircle
            color={hoverElementColor}
            data-tip="React-tooltip"
            size={hoverElementSize}
            className="Tooltip-success"
          />
        );
      case 'warning':
        return (
          <AiOutlineWarning
            color={hoverElementColor}
            data-tip="React-tooltip"
            size={hoverElementSize}
            className="Tooltip-warning"
          />
        );
      case 'error':
        return (
          <BiErrorCircle
            color={hoverElementColor}
            data-tip="React-tooltip"
            size={hoverElementSize}
            className="Tooltip-error"
          />
        );
      case 'help':
        return (
          <BiHelpCircle
            color={hoverElementColor}
            data-tip="React-tooltip"
            size={hoverElementSize}
            className="Tooltip-help"
          />
        );
      default:
      case 'info':
        return (
          <AiOutlineInfoCircle
            color={hoverElementColor}
            data-tip="React-tooltip"
            size={hoverElementSize}
            className="Tooltip-info"
          />
        );
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

      <ReactTooltip place={place} type={TooltipType} effect={effect} {...props}>
        {children}
      </ReactTooltip>
    </div>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  TooltipType: PropTypes.oneOf(['dark', 'success', 'warning', 'error', 'info', 'light']),
  effect: PropTypes.oneOf(['float', 'solid']),
  HoverElementType: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'help']),
  hoverElementSize: PropTypes.string,
  hoverElement: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  hoverElementColor: PropTypes.string,
};

Tooltip.defaultProps = {
  className: null,
  place: 'left',
  TooltipType: 'dark',
  effect: 'solid',
  HoverElementType: null,
  hoverElementSize: null,
  hoverElement: null,
  hoverElementColor: null,
};

export default Tooltip;
