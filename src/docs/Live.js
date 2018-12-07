import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import scriptjs from 'scriptjs';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { Loader } from '../components';
import Docs from './Docs';

class Live extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    scriptjs('https://unpkg.com/babel-standalone@6/babel.min.js', () => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const {
      component,
      propDescriptions,
      code,
      showDocs,
      showEditor,
      scope,
    } = this.props;
    const { loading } = this.state;

    // Add `Fragment` to every scope by default
    const scopeProps = scope;
    scopeProps.Fragment = Fragment;

    return (
      <Fragment>
        {showDocs && (
          <Docs component={component} propDescriptions={propDescriptions} />
        )}
        {loading ? (
          <div className="u-textCenter">
            <Loader className="u-textXlarge u-textPrimary" />
          </div>
        ) : (
          <LiveProvider
            scope={scopeProps}
            code={code}
            mountStylesheet={false}
            transformCode={input => window.Babel.transform(input, { presets: ['stage-0', 'react'] })
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
  }
}

Live.propTypes = {
  component: PropTypes.func,
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
