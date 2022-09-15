import React, { useEffect } from 'react';
import { withLog } from '../lib/withLog';

type Props = {
  propMessage: string;
};

const NotFound: React.FC<Props> = props => {
  const { propMessage } = props;

  useEffect(() => {
    console.log(`${propMessage} Not Found Page`);
  });

  return <div className='center'>404 - Not Found</div>;
};

export default withLog(NotFound);
