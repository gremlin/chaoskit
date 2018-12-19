import React from 'react';

import Foundation from '../layouts/Foundation';
import { Button, Icon } from '../components';

const NotFound = () => (
  <Foundation>
    <div className="notFound__wrapper u-pv--large u-textCenter u-contrast">
      <div className="container">
        <h1 className="notFound__title">404</h1>
        <Button type="default" url="/">
          <Icon icon="arrow-left" className="u-mr--small" />
          Back Home
        </Button>
      </div>
    </div>
  </Foundation>
);

export default NotFound;
