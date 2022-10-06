import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import useWindowSize from '../../Hooks/useWindowSize/useWindowSize';
import PropTypes from 'prop-types';

import './CardGroup.scss';

const CardGroup = ({
  title,
  text,
  maxWidth,
  titleAlignment,
  textAlignment,
  cardAlignment,
  cardSize,
  cardFit,
  spacing,
  ...props
}) => {
  const cardGroup = useRef();
  const { screenWidth } = useWindowSize();
  const [cardGroupWidth, setCardGroupWidth] = useState();

  useEffect(() => {
    const groupWidth = cardGroup.current.offsetWidth;
    groupWidth && setCardGroupWidth(groupWidth);
  }, [screenWidth]);

  let titleAlign = titleAlignment;
  let txtAlign = textAlignment;
  let justify = 'center';
  if (cardAlignment === 'left') {
    justify = 'flex-start';
  } else if (cardAlignment === 'right') {
    justify = 'flex-end';
  }

  const wrapperStyles = {};
  const cardHasDefinedSize = typeof cardSize === 'object';

  if (cardHasDefinedSize && cardGroupWidth) {
    const childCount = React.Children.count(props.children);
    const cardWidth = (cardSize?.width || cardSize?.minWidth) + spacing * 2;

    const maxCardCountPerRow = Math.max(Math.floor(cardGroupWidth / cardWidth), 1);
    const numOfRows = Math.ceil(childCount / maxCardCountPerRow);
    let cardsPerRow = Math.ceil(childCount / numOfRows);

    wrapperStyles.margin = '0 auto';
    if (cardWidth > screenWidth) {
      wrapperStyles.width = '100%';
    } else {
      const centeredWidth = Math.min(cardsPerRow, childCount) * cardWidth;
      if (!cardSize.width) {
        const fitCount = Math.floor(100 / parseFloat(cardFit));
        if (fitCount * cardWidth > cardGroupWidth) {
          wrapperStyles.width = centeredWidth;
        }
      } else {
        wrapperStyles.width = centeredWidth;
      }
    }

    if (cardsPerRow === 1) {
      titleAlign = 'center';
      txtAlign = 'center';
    }
  }

  return (
    <div className={cx('CardGroup', props.className)} ref={cardGroup} style={{ maxWidth }}>
      <div style={wrapperStyles}>
        {title && (
          <h2
            className={'CardGroupHeader'}
            style={{ textAlign: titleAlign, paddingLeft: spacing, paddingRight: spacing }}
          >
            {title}
          </h2>
        )}
        {text && (
          <p className={'CardGroupText'} style={{ textAlign: txtAlign, paddingLeft: spacing, paddingRight: spacing }}>
            {text}
          </p>
        )}
        <div className={'CardGroupContentWrap'} style={{ justifyContent: justify }}>
          {cardGroupWidth &&
            React.Children.map(props.children, (child) => {
              if (React.isValidElement(child)) {
                return (
                  <div
                    style={{
                      padding: spacing,
                      boxSizing: 'border-box',
                      display: 'flex',
                      width: cardFit,
                      minWidth: cardSize?.minWidth && cardSize.minWidth + spacing * 2,
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
  maxWidth: PropTypes.string,
  titleAlignment: PropTypes.oneOf(['center', 'left', 'right']),
  textAlignment: PropTypes.oneOf(['center', 'left', 'right']),
  cardAlignment: PropTypes.oneOf(['center', 'left', 'right']),
  cardFit: PropTypes.string,
  spacing: PropTypes.number,
  cardSize: PropTypes.shape({
    width: PropTypes.number,
    minWidth: PropTypes.number,
  }),
};

CardGroup.defaultProps = {
  title: null,
  text: null,
  maxWidth: '1200px',
  titleAlignment: 'center',
  textAlignment: 'center',
  cardAlignment: 'left',
  cardFit: '100%',
  cardSize: undefined,
  spacing: 16,
};

export default CardGroup;
