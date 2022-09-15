import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { withLog } from '../lib/withLog';

type Props = {
  propMessage: string;
};

const Layout: React.FC<Props> = props => {
  const { propMessage } = props;

  useEffect(() => {
    console.log(`${propMessage} Layout`);
  });

  return (
    <>
      <header>
        <h1>Posts App!</h1>
      </header>
      <Outlet />
      <footer>Made with ♥️ by Mateo</footer>
    </>
  );
};

export default withLog(Layout);
