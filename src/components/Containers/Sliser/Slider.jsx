import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Slider.scss';
import { GrClose } from 'react-icons/gr';
import { useEscape } from '../../Hooks/useEscape/useEscape';

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
  ...props
}) => {
  useEscape(escapeToClose, onClose);
  return (
    <div className={cx('Slider', className)}>
      <div
        className={cx('SliderContainer', side, { isOpen })}
        style={{
          width,
          transitionProperty: 'translate, transform, transformX',
          transitionDuration: `${duration / 1000}s`,
          overflowX: 'hidden',
        }}
        {...props}
      >
        {showCloseIcon && (
          <button className={cx('SliderCloseElement', side)} onClick={onClose}>
            {closeElement ?? <GrClose />}
          </button>
        )}
        {children}
      </div>
      <div className={cx('SliderBackdrop', { isOpen, isClosed: !isOpen })}>
        {isOpen && <div onClick={onClose} className={cx('SliderClickableBackdrop', { isOpen })} />}
      </div>
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
};
