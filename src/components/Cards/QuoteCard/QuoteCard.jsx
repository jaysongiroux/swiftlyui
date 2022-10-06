import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import './QuoteCard.scss';

const size = {
  width: 340,
  minWidth: 316,
};

const QuoteCard = ({ link, profilePic, name, children, location }) => {
  return (
    <div className={cx('QuoteCard')} style={size}>
      <a href={link ?? '#'} className={'QuoteCardLink'}>
        <div className={'QuoteCardProfile'}>
          {typeof profilePic === 'string' ? (
            <img src={profilePic} className={'QuoteCardProfilePic'} alt={`${name}'s profile`} />
          ) : (
            profilePic
          )}
        </div>
        <blockquote>
          <ImQuotesLeft />
          {children}
          <ImQuotesRight />
        </blockquote>
        <div className={'QuoteCardText'}>
          <div className={'QuoteCardName'}>{name}</div>
          <div className={'QuoteCardLocation'}>{location}</div>
        </div>
      </a>
    </div>
  );
};

QuoteCard.size = size;

QuoteCard.propTypes = {
  link: PropTypes.string,
  profilePic: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  location: PropTypes.string,
};

QuoteCard.defaultProps = {
  link: null,
  className: null,
  style: {},
  children: null,
  location: '',
  name: '',
};

export default QuoteCard;
