import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import './QuoteCard.scss';

const QuoteCard = ({ link, profilePic, name, children, location, headline, className, canInteract }) => {
  const interact = canInteract || link;
  const content = (
    <Card className={className} canInteract={interact}>
      <>
        <div className={'QuoteCardProfile'}>
          {typeof profilePic === 'string' ? (
            <img src={profilePic} className={'QuoteCardProfilePic'} alt={`${name}'s profile`} />
          ) : (
            profilePic
          )}
        </div>
        {headline && <h3 className="QuoteCardHeadline">{headline}</h3>}
        <blockquote>
          <ImQuotesLeft />
          &ensp;
          {children}
          &ensp; <ImQuotesRight />
        </blockquote>
        <div className={'QuoteCardText'}>
          <div className={'QuoteCardName'}>{name}</div>
          <div className={'QuoteCardLocation'}>{location}</div>
        </div>
      </>
    </Card>
  );

  return <div className={cx('QuoteCard')}>{link ? <a href={link}>{content}</a> : content}</div>;
};

QuoteCard.propTypes = {
  link: PropTypes.string,
  profilePic: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  location: PropTypes.string,
  canInteract: PropTypes.bool,
};

QuoteCard.defaultProps = {
  link: null,
  className: null,
  style: {},
  children: null,
  location: null,
  name: null,
  canInteract: true,
};

export default QuoteCard;
