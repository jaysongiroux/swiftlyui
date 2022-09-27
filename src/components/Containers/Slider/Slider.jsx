import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Slider.scss';
import { GrClose } from 'react-icons/gr';
import { useEscape } from '../../Hooks/useEscape/useEscape';
import { IconContext } from 'react-icons';

export const Slider = ({
  className,
  side,
  onClose,
  isOpen,
  showCloseIcon,
  closeElement,
  children,
  width,
  displayBackdrop,
  duration,
  escapeToClose,
  sliderStyle,
  closeStyle,
  style,
  closeContainerStyle,
}) => {
  useEscape(escapeToClose, onClose);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div className={cx('Slider', className)} style={style}>
      <div
        className={cx('SliderContainer', side, { isOpen })}
        style={{
          width,
          transitionProperty: 'translate, transform, transformX',
          transitionDuration: `${duration / 1000}s`,
          overflowX: 'hidden',
          ...sliderStyle,
        }}
      >
        {showCloseIcon && (
          <button className={cx('SliderCloseElement', side)} style={closeContainerStyle} onClick={onClose}>
            {closeElement ?? (
              <IconContext.Provider value={{ ...closeStyle }} className="SliderCloseIcon">
                <GrClose />
              </IconContext.Provider>
            )}
          </button>
        )}
        {children}
      </div>
      {displayBackdrop && (
        <div className={cx('SliderBackdrop', { isOpen, isClosed: !isOpen })}>
          {isOpen && <div onClick={onClose} className={cx('SliderClickableBackdrop', { isOpen })} />}
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  side: PropTypes.oneOf(['left', 'right']),
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
  closeElement: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  width: PropTypes.string,
  displayBackdrop: PropTypes.bool,
  duration: PropTypes.number,
  escapeToClose: PropTypes.bool,
  sliderStyle: PropTypes.object,
  closeStyle: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    children: PropTypes.node,
  }),
  style: PropTypes.object,
  closeContainerStyle: PropTypes.object,
};

Slider.defaultProps = {
  className: null,
  side: 'right',
  onClose: undefined,
  isOpen: false,
  showCloseIcon: true,
  closeElement: null,
  children: null,
  width: '50%',
  displayBackdrop: true,
  duration: 300,
  escapeToClose: true,
  sliderStyle: {},
  closeStyle: {},
  style: {},
  closeContainerStyle: {},
};
