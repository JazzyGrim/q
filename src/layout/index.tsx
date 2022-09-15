import React from "react";
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {

  return <>
    <header>
      <h1>Posts App!</h1>
    </header>
    <Outlet />
    <footer>Made with  ♥️ by Mateo</footer>
  </>
}

export default Layout;

