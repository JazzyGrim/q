import React, { useEffect, useState } from 'react';
import ContentBlock from '../components/ContentBlock';
import { withLog } from '../lib/withLog';
import { IComment, IPost, IUser } from '../models/types';

type Props = {
  post: IPost;
  user: IUser;
  comments: IComment[];
  autoShowComments?: boolean;
  hideLink?: boolean;
  propMessage: string;
};

const PostContent: React.FC<Props> = props => {
  const {
    user,
    post,
    comments,
    autoShowComments = false,
    hideLink,
    propMessage,
  } = props;
  const [open, setOpen] = useState<boolean>(autoShowComments);

  useEffect(() => {
    console.log(`${propMessage} PostContent`);
  }, []);

  const renderComments = (): JSX.Element => {
    if (!open)
      return (
        <p className='comment-link' onClick={() => setOpen(true)}>
          Show comments
        </p>
      );
    // Don't render comments if there aren't any
    if (!comments || !comments.length) return <p>No comments</p>;

    return (
      <div className='content-block-comments'>
        {comments.map(comment => (
          <ContentBlock
            key={comment.id}
            title={comment.name}
            authorEmail={comment.email}
            footerText={comment.body}
          />
        ))}
      </div>
    );
  };

  if (!post) return <h1>Error</h1>;
  return (
    <ContentBlock
      key={post.id}
      title={post.title}
      authorName={user.name}
      authorEmail={user.email}
      forwardLink={!hideLink ? `/posts/${post.id}` : undefined}
      renderFooter={() => renderComments()}
    />
  );
};

export default withLog(PostContent);
