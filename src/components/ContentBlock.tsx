import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  title: string;
  authorName?: string;
  authorEmail: string;
  renderFooter?: () => JSX.Element;
  footerText?: string;
  forwardLink?: string;
}

const ContentBlock: React.FC<Props> = (props) => {
  const { title, authorName, authorEmail, footerText, renderFooter, forwardLink } = props;

  return <div className='content-block'>
    <div className="content-block-header">
      <div className="content-block-header-info">
        {!!authorName && <h4>{authorName}</h4>}
        <h5>{authorEmail}</h5>
      </div>
      {!!forwardLink && <Link to={forwardLink}><FaArrowRight /></Link>}
    </div>
    <h3>{title}</h3>
    <div className="content-block-footer">
      {!!renderFooter ?
        renderFooter()
        :
        <p>{footerText}</p>
      }
    </div>
  </div>
}

export default ContentBlock;

