import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import 'what-input';

import Foundation from './Foundation';
import { styles } from '../helpers/styles';
import { config } from '../helpers/config';
import {
  Button, Icon, Inline, List, ListItem,
} from '../components';
import { version } from '../../package.json';

import mascot from '../assets/media/logo-mascot.svg';
import '../assets/styles/site.scss';

class BaseLayout extends React.Component {
  state = {
    isMobileNavOpen: false,
  };

  componentDidMount() {
    this.viewportMediumMin = window.matchMedia(
      `(min-width: ${styles.viewport.medium})`,
    );
    this.viewportMediumMin.addListener(this.checkSize);

    window.onpopstate = (event) => {
      if (event.srcElement.location.pathname === event.target.location.pathname) return;

      this.setState(
        {
          isMobileNavOpen: false,
        },
        () => {
          this.clearMobileNavClasses();
        },
      );
    };
  }

  componentWillUnmount() {
    this.viewportMediumMin.removeListener(this.checkSize);
  }

  // Make sure we close mobile nav if resizing from mobile to desktop
  checkSize = (event) => {
    const { isMobileNavOpen } = this.state;

    if (isMobileNavOpen && event.matches) {
      this.handleMobileNavToggle();
    }
  };

  handleMobileNavToggle = () => {
    const { isMobileNavOpen } = this.state;

    this.setState({
      isMobileNavOpen: !isMobileNavOpen,
    });
  };

  render() {
    const { children, pageTitle } = this.props;
    const { isMobileNavOpen } = this.state;

    const navClasses = cx('docs__sidebar', {
      [config.classes.open]: isMobileNavOpen,
    });

    return (
      <Foundation>
        <div className="container">
          <div className="docs__wrapper">
            <aside className={navClasses}>
              <div className="docs__sidebar-topWrapper">
                <Link to="/" className="docs__mascot">
                  <img src={mascot} alt="ChaosKit" />
                </Link>
                <Button
                  type="reset"
                  onClick={this.handleMobileNavToggle}
                  className="docs__sidebar-mobileToggle u-hiddenUp@medium"
                />
              </div>
              <div className="docs__sidebar-listWrapper">
                <h5>Concepts</h5>
                <List>
                  <ListItem>
                    <Link to="/sass/" activeClassName={config.classes.active}>
                      Sass
                    </Link>
                  </ListItem>
                </List>
                <h5>Components</h5>
                <List>
                  <ListItem>
                    <Link to="/alert/" activeClassName={config.classes.active}>
                      Alert
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/avatar/" activeClassName={config.classes.active}>
                      Avatar
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/badge/" activeClassName={config.classes.active}>
                      Badge
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/block-grid/"
                      activeClassName={config.classes.active}
                    >
                      Block Grid
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/button/" activeClassName={config.classes.active}>
                      Button
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/close/" activeClassName={config.classes.active}>
                      Close
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/dropdown/"
                      activeClassName={config.classes.active}
                    >
                      Dropdown
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/grid/" activeClassName={config.classes.active}>
                      Grid
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/icon/" activeClassName={config.classes.active}>
                      Icon
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/inline/" activeClassName={config.classes.active}>
                      Inline
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/list/" activeClassName={config.classes.active}>
                      List
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/loader/" activeClassName={config.classes.active}>
                      Loader
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/modal/" activeClassName={config.classes.active}>
                      Modal
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/offCanvas/"
                      activeClassName={config.classes.active}
                    >
                      OffCanvas
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/reveal/" activeClassName={config.classes.active}>
                      Reveal
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/tabs/" activeClassName={config.classes.active}>
                      Tabs
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/tooltip/"
                      activeClassName={config.classes.active}
                    >
                      Tooltip
                    </Link>
                  </ListItem>
                </List>
                <h5>Forms</h5>
                <List>
                  <ListItem>
                    <Link
                      to="/checkbox/"
                      activeClassName={config.classes.active}
                    >
                      Checkbox
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/choices-single/"
                      activeClassName={config.classes.active}
                    >
                      Choices Single
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/choices-multi/"
                      activeClassName={config.classes.active}
                    >
                      Choices Multi
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/input/" activeClassName={config.classes.active}>
                      Input
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/radio/" activeClassName={config.classes.active}>
                      Radio
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/select/" activeClassName={config.classes.active}>
                      Select
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/textarea/"
                      activeClassName={config.classes.active}
                    >
                      Textarea
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/toggle/" activeClassName={config.classes.active}>
                      Toggle
                    </Link>
                  </ListItem>
                </List>
                <h5>Utilities</h5>
                <List>
                  <ListItem>
                    <Link to="/flex/" activeClassName={config.classes.active}>
                      Flex
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/typography/"
                      activeClassName={config.classes.active}
                    >
                      Typography
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/whitespace/"
                      activeClassName={config.classes.active}
                    >
                      Whitespace
                    </Link>
                  </ListItem>
                </List>
              </div>
            </aside>
            <main className="docs__content">
              {pageTitle && <h1>{pageTitle}</h1>}
              {children}
            </main>
          </div>
        </div>
        <footer className="u-bgPanel u-mt--large u-pv--regular">
          <div className="container">
            <Inline>
              <div className="u-textMuted u-textSmall">
                Current Version:{' '}
                <strong className="u-textDefault">{version}</strong>
              </div>
              <a
                className="u-inlineBlock"
                target="_blank"
                rel="noopener noreferrer"
                title="View ChaosKit on GitHub"
                href="https://www.github.com/gremlin/chaoskit"
              >
                <Icon icon="github" />
              </a>
              <div className="u-textSmall">
                Ipsum provided by{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://fillerama.io/"
                >
                  Fillerama
                </a>
              </div>
            </Inline>
          </div>
        </footer>
      </Foundation>
    );
  }
}

BaseLayout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
};

export default BaseLayout;
