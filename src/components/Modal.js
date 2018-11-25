import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { TimelineMax } from 'gsap/TweenMax';

import { config } from '../helpers/config';

class Modal extends React.Component {
  state = {
    renderModal: false,
  };

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;

    if (!open && nextProps.open) {
      this.setState({
        renderModal: true,
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
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  onReverseComplete = () => {
    const { onReverseComplete } = this.props;

    this.setState({
      renderModal: false,
    }, () => {
      onReverseComplete();
    });
  }

  attachTimeline = () => {
    const { onStart, onReverseStart, onComplete, open } = this.props;

    const $body = document.body;
    const $modal = this.modal;

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $modal.timeline = new TimelineMax({
      paused: !open,
      onStart: () => {
        $body.classList.add('has-openModal');
        $modal.classList.add(config.classes.open);

        onStart();
      },
      onUpdate: () => {
        const newTime = $modal.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
            onReverseStart();

            $body.classList.remove('has-openModal');
            $modal.classList.remove(config.classes.open);
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        // Focus on active modal for screen readers
        $modal.focus();

        onComplete();
      },
      onReverseComplete: () => {
        this.onReverseComplete();
      },
    });

    $modal.timeline
      .set($modal, {
        display: 'block',
      })
      .to($modal, 0.25, {
        css: {
          opacity: 1,
        },
      })
      .to($modal.querySelector('.modal-dialog'), 0.25, {
        css: {
          opacity: 1,
          y: 0,
        },
        ease: config.easingBounce,
      });
  }

  openModal = () => {
    const $modal = this.modal;

    $modal.timeline.play();
  }

  closeModal = () => {
    const $modal = this.modal;

    $modal.timeline.reverse();
  }

  handleOutsideModalClick = (e) => {
    const { handleOutsideModalClick } = this.props;

    // If click originates outside of modal dialog
    if (e.target.hasAttribute('data-modalroot')) {
      handleOutsideModalClick();
    }

    return false;
  }

  render() {
    const { children, className, size } = this.props;
    const modalClasses = cx('modal', {
      'modal--small': size === 'small',
      'modal--large': size === 'large',
    }, className);
    const { renderModal } = this.state;

    return (
      renderModal &&
        ReactDOM.createPortal(
          <div /* eslint-disable-line max-len, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
            className={modalClasses}
            onClick={this.handleOutsideModalClick}
            ref={(ref) => { this.modal = ref; }}
            data-modalroot
          >
            <div className="modal-dialog">
              {children}
            </div>
          </div>,
          document.body,
        )
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  open: PropTypes.bool,
  handleOutsideModalClick: PropTypes.func,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  open: false,
  handleOutsideModalClick: () => {},
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
};

export default Modal;
