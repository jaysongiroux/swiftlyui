import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './ImageCard.scss';
import { FiArrowRight } from 'react-icons/fi';

const size = {
  width: 320,
};

const ImageCard = ({ className, children, imageLink, linkText, imageCaption, link }) => {
  return (
    <Card canInteract={false} className={className} cardSize={size} style={{ padding: 0, margin: 0 }}>
      <div className="ImageCard">
        <img src={imageLink} className="ImageCardImage" />
        {imageCaption && (
          <>
            <div className="ImageCardCaption">{imageCaption}</div>
            <hr className="ImageCardDivider" />
          </>
        )}
        <div className="ImageCardContentContainer">
          <div className="ImageCardContent">{children}</div>
          {link && (
            <a className="ImageCardContentLink" href={link}>
              <div className="ImageCardRightContainer">
                {linkText}
                <FiArrowRight />
              </div>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

ImageCard.size = size;

ImageCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]).isRequired,
  imageLink: PropTypes.string.isRequired,
  linkText: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
  imageCaption: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
  link: PropTypes.string,
};

ImageCard.defaultProps = {
  className: null,
  children: null,
  imageLink: null,
  linkText: null,
  imageCaption: null,
  link: null,
};

export default ImageCard;
