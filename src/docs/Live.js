import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import scriptjs from 'scriptjs';
import useMount from 'react-use/lib/useMount';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { Loader } from '../components';
import Docs from './Docs';

const Live = ({
  component,
  code,
  scope,
  propDescriptions,
  showDocs,
  showEditor,
}) => {
  const [isLoading, setLoading] = useState(true);

  useMount(() => {
    scriptjs('https://unpkg.com/babel-standalone@6/babel.min.js', () => {
      setLoading(false);
    });
  });

  // Add methods to every scope by default
  const scopeProps = scope;
  scopeProps.Fragment = Fragment;
  scopeProps.useState = useState;
  scopeProps.useEffect = useEffect;

  return (
    <Fragment>
      {showDocs && (
        <Docs component={component} propDescriptions={propDescriptions} />
      )}
      {isLoading ? (
        <div className="u-textCenter">
          <Loader className="u-textXlarge u-textPrimary" />
        </div>
      ) : (
        <LiveProvider
          scope={scopeProps}
          code={code}
          mountStylesheet={false}
          transformCode={input =>
            window.Babel.transform(input, { presets: ['stage-0', 'react'] })
              .code
          }
        >
          {showEditor && <LiveEditor />}
          <LivePreview />
          <LiveError />
        </LiveProvider>
      )}
    </Fragment>
  );
};

Live.propTypes = {
  component: PropTypes.any,
  code: PropTypes.string.isRequired,
  scope: PropTypes.object.isRequired,
  propDescriptions: PropTypes.object,
  showDocs: PropTypes.bool,
  showEditor: PropTypes.bool,
};

Live.defaultProps = {
  showDocs: true,
  showEditor: true,
};

export default Live;
