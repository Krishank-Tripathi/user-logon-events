import React from 'react';
import { Route } from 'react-router-dom';

const CommonLayout = ({ children }) => {
  return (
    <div id="page">
      <header>
        <div>User Activity Detail</div>
      </header>
      <main>{children}</main>
    </div>
  );
};


export const CommonRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <CommonLayout>
          <Component {...matchProps} />
        </CommonLayout>
      )}
    />
  );
};
