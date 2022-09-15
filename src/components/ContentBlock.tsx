import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { withLog } from '../lib/withLog';

type Props = {
  title: string;
  authorName?: string;
  authorEmail: string;
  renderFooter?: () => JSX.Element;
  footerText?: string;
  forwardLink?: string;
  propMessage: string;
};

const ContentBlock: React.FC<Props> = props => {
  const {
    title,
    authorName,
    authorEmail,
    footerText,
    renderFooter,
    forwardLink,
    propMessage,
  } = props;

  useEffect(() => {
    console.log(`${propMessage} ContentBlock`);
  });

  return (
    <div className='content-block'>
      <div className='content-block-header'>
        <div className='content-block-header-info'>
          {!!authorName && <h4>{authorName}</h4>}
          <h5>{authorEmail}</h5>
        </div>
        {!!forwardLink && (
          <Link to={forwardLink} target='_blank' rel='noopener noreferrer'>
            <FaArrowRight />
          </Link>
        )}
      </div>
      <h3>{title}</h3>
      <div className='content-block-footer'>
        {renderFooter ? renderFooter() : <p>{footerText}</p>}
      </div>
    </div>
  );
};

export default withLog(ContentBlock);
