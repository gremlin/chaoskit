import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { TimelineMax } from 'gsap/TweenMax';

import { config } from '../helpers/config';
import Close from './Close';

class OffCanvas extends React.Component {
  offCanvasRef = React.createRef();

  offCanvasPanelRef = React.createRef();

  state = {
    renderOffCanvas: false,
  };

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;

    if (!open && nextProps.open) {
      this.setState({
        renderOffCanvas: true,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { open } = this.props;

    if (!prevProps.open && open) {
      this.attachTimeline();
    }

    if (prevProps.open !== open) {
      if (open) {
        this.openOffCanvas();
      } else {
        this.closeOffCanvas();
      }
    }
  }

  onReverseComplete = () => {
    const { onReverseComplete } = this.props;

    this.setState(
      {
        renderOffCanvas: false,
      },
      () => {
        onReverseComplete();
      },
    );
  };

  attachTimeline = () => {
    const {
      onStart, onReverseStart, onComplete, open,
    } = this.props;

    const $body = document.body;
    const $offCanvas = this.offCanvasRef.current;
    const $panel = this.offCanvasPanelRef.current;

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $offCanvas.timeline = new TimelineMax({
      paused: !open,
      onStart: () => {
        $body.classList.add('has-openOffCanvas');
        $offCanvas.classList.add(config.classes.open);

        onStart();
      },
      onUpdate: () => {
        const newTime = $offCanvas.timeline.time();
        if (
          (forward && newTime < lastTime)
          || (!forward && newTime > lastTime)
        ) {
          forward = !forward;
          if (!forward) {
            onReverseStart();

            $body.classList.remove('has-openOffCanvas');
            $offCanvas.classList.remove(config.classes.open);
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        // Focus on active offCanvas for screen readers
        $offCanvas.focus();

        onComplete();
      },
      onReverseComplete: () => {
        this.onReverseComplete();
      },
    });

    $offCanvas.timeline
      .set($offCanvas, {
        display: 'block',
      })
      .to(
        $offCanvas,
        0.5,
        {
          css: {
            opacity: 1,
          },
        },
        'offCanvas',
      )
      .to(
        $panel,
        0.5,
        {
          css: {
            x: 0,
          },
          ease: config.easing,
        },
        'offCanvas',
      );
  };

  openOffCanvas = () => {
    const $offCanvas = this.offCanvasRef.current;

    $offCanvas.timeline.play();
  };

  closeOffCanvas = () => {
    const $offCanvas = this.offCanvasRef.current;

    $offCanvas.timeline.reverse();
  };

  handleOutsideOffCanvasClick = (e) => {
    const { onOffCanvasToggle } = this.props;

    // If click originates outside of offCanvas panel
    if (e.target.hasAttribute('data-offcanvasroot')) {
      onOffCanvasToggle();
    }

    return false;
  };

  handleOffCanvasToggle = () => {
    const { onOffCanvasToggle } = this.props;

    onOffCanvasToggle();
  };

  render() {
    const { children, className, align } = this.props;
    const classes = cx(
      'offCanvas',
      {
        'offCanvas--right': align === 'right',
      },
      className,
    );
    const { renderOffCanvas } = this.state;

    return (
      renderOffCanvas
      && ReactDOM.createPortal(
        <div /* eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
          className={classes}
          onClick={this.handleOutsideOffCanvasClick}
          ref={this.offCanvasRef}
          data-offcanvasroot
        >
          <div className="offCanvas-panel" ref={this.offCanvasPanelRef}>
            <Close
              onClick={this.handleOffCanvasToggle}
              className="offCanvas-close"
            />
            {children}
          </div>
        </div>,
        document.body,
      )
    );
  }
}

OffCanvas.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
  open: PropTypes.bool,
  onOffCanvasToggle: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
};

OffCanvas.defaultProps = {
  children: null,
  open: false,
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
};

export default OffCanvas;
