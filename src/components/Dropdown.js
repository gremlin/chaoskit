import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useMount from 'react-use/lib/useMount';
import gsap from 'gsap';
import { useTheme } from 'emotion-theming';

import Button from './Button';
import Icon from './Icon';
import { misc, text } from '../assets/styles/utility';
import { generateGradient } from '../assets/styles/utility/gradient';

const DropdownPanelStylesVariables = theme => ({
  offset: theme.space.base,
});

export const DropdownMenuItemStyles = (theme, props = {}) => [
  theme.fontSize.medium__fluid,
  text.heading(theme, 'base'),
  {
    margin: `0 -${theme.space.small}px`,
    color: theme.fontColor.base,
    padding: theme.space.small,
    display: 'block',
    borderRadius: theme.borderRadius.base,
    lineHeight: theme.lineHeight.base,

    '&:hover, &:focus': {
      color: theme.fontColor.base,
      background: theme.color.panel.dark,
    },
  },

  props.active && {
    background: theme.color.panel.dark,
  },
];

const Dropdown = ({
  children,
  className,
  onComplete,
  onReverseComplete,
  onReverseStart,
  onStart,
  panelWidth,
  position,
  trigger,
  showArrow,
  ...opts
}) => {
  const theme = useTheme();

  const dropdownRef = useRef();
  const dropdownPanelRef = useRef();
  const dropdownTriggerRef = useRef();
  const [hidden, setHidden] = useState(true);

  const dropdownOpen = () => {
    const $dropdown = dropdownRef.current;

    if ($dropdown && $dropdown.timeline) $dropdown.timeline.play();
  };

  const dropdownClose = () => {
    const $dropdown = dropdownRef.current;

    if ($dropdown && $dropdown.timeline) $dropdown.timeline.reverse();
  };

  /**
   * Determine if click originates from outside `.dropdown-panel`
   * @param  {event} e
   * @return {false}
   */
  const checkInside = e => {
    if (e.target.closest('.CK__Dropdown__Panel') === null) {
      dropdownClose();

      return;
    }

    return false;
  };

  const handleOnStart = () => {
    setHidden(false);

    onStart();
  };

  const handleOnReverseStart = () => {
    setHidden(true);

    onReverseStart();
  };

  const attachTimeline = () => {
    const $dropdown = dropdownRef.current;
    const $panel = dropdownPanelRef.current;

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $dropdown.timeline = gsap.timeline({
      paused: true,
      onStart() {
        handleOnStart();
      },
      onComplete() {
        onComplete();

        document.addEventListener('click', checkInside, false);
      },
      onUpdate: () => {
        const newTime = $dropdown.timeline.time();

        if (
          (forward && newTime < lastTime) ||
          (!forward && newTime > lastTime)
        ) {
          forward = !forward;
          if (!forward) {
            handleOnReverseStart();
          }
        }
        lastTime = newTime;
      },
      onReverseComplete() {
        onReverseComplete();

        document.removeEventListener('click', checkInside, false);
      },
    });

    $dropdown.timeline
      .set($panel, {
        display: 'block',
      })
      .to($panel, {
        duration: theme.gsap.timing.short,
        y: 0,
        scale: 1,
        opacity: 1,
        ease: theme.gsap.transition.bounce,
      });
  };

  useMount(() => {
    attachTimeline();
  });

  const handleDropdownToggle = () => {
    const $dropdown = dropdownRef.current;

    if ($dropdown.timeline.progress() === 1) {
      dropdownClose();
    } else {
      dropdownOpen();
    }
  };

  return (
    <div
      css={{
        display: 'inline-block',
        position: 'relative',
      }}
      className={cx('CK__Dropdown', className)}
      aria-haspopup="true"
      aria-expanded={!hidden}
      ref={dropdownRef}
      {...opts}
    >
      <Button
        onClick={handleDropdownToggle}
        active={!hidden}
        {...trigger.props}
        ref={dropdownTriggerRef}
      >
        {trigger.label}
        {showArrow && (
          <Icon
            css={{
              marginLeft: theme.space.small,
              transition: `transform ${theme.timing.base} ${theme.transition.bounce}`,
              transform: !hidden && 'rotate(180deg)',
            }}
            size="small"
            icon="caret-down"
          />
        )}
      </Button>
      <div
        css={[
          misc.trimChildren,
          {
            // 1. GSAP
            background: generateGradient({
              start: theme.color.light.base,
              stop: theme.color.panel.light,
              position: 'to bottom',
            }),
            padding: theme.space.large,
            position: 'absolute',
            width: panelWidth,
            maxHeight: 500,
            overflowY: 'auto',
            color: theme.fontColor.base,

            border: theme.border.base,
            borderRadius: theme.borderRadius.base,
            textAlign: 'left',
            zIndex: 10,
            boxShadow: theme.boxShadow.neutral,
            // 1
            opacity: 0,
            display: 'none',
          },

          position === 'left' && {
            transformOrigin: 'left top',
            transform: `translateY(-${
              DropdownPanelStylesVariables(theme).offset
            }px) scale(0.75)`,
            left: 0,
            top: `calc(100% + ${DropdownPanelStylesVariables(theme).offset}px)`,
          },

          position === 'center' && {
            transformOrigin: 'center top',
            left: '50%',
            transform: `translate(-50%, -${
              DropdownPanelStylesVariables(theme).offset
            }px) scale(0.75)`,
            top: `calc(100% + ${DropdownPanelStylesVariables(theme).offset}px)`,
          },

          position === 'right' && {
            transformOrigin: 'right top',
            transform: `translateY(-${
              DropdownPanelStylesVariables(theme).offset
            }px) scale(0.75)`,
            top: `calc(100% + ${DropdownPanelStylesVariables(theme).offset}px)`,
          },

          position === 'up-left' && {
            transformOrigin: 'left bottom',
            transform: `translateY(${
              DropdownPanelStylesVariables(theme).offset
            }px) scale(0.75)`,
            bottom: `calc(100% + ${
              DropdownPanelStylesVariables(theme).offset
            }px)`,
          },

          position === 'up-center' && {
            transformOrigin: 'center bottom',
            left: '50%',
            transform: `translate(-50%, ${
              DropdownPanelStylesVariables(theme).offset
            }px) scale(0.75)`,
            bottom: `calc(100% + ${
              DropdownPanelStylesVariables(theme).offset
            }px)`,
          },

          position === 'up-right' && {
            transformOrigin: 'right bottom',
            right: 0,
            transform: `translateY(${
              DropdownPanelStylesVariables(theme).offset
            }px) scale(0.75)`,
            bottom: `calc(100% + ${
              DropdownPanelStylesVariables(theme).offset
            }px)`,
          },
        ]}
        className="CK__Dropdown__Panel"
        ref={dropdownPanelRef}
      >
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** GSAP callback */
  onComplete: PropTypes.func,
  /** GSAP callback */
  onReverseComplete: PropTypes.func,
  /** GSAP callback */
  onReverseStart: PropTypes.func,
  /** GSAP callback */
  onStart: PropTypes.func,
  panelWidth: PropTypes.number,
  position: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'up-left',
    'up-center',
    'up-right',
  ]),
  /** All available Button props can be passed-in */
  trigger: PropTypes.shape({
    props: PropTypes.object,
    label: PropTypes.any.isRequired,
  }),
  showArrow: PropTypes.bool,
};

Dropdown.defaultProps = {
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
  panelWidth: 250,
  position: 'left',
};

export default Dropdown;
