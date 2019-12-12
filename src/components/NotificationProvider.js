import {
  Fragment,
  forwardRef,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useTheme } from 'emotion-theming';
import gsap from 'gsap';

import { generateUUID } from '../helpers/utility';
import Close from './Close';

const NotificationContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return [
        {
          index: generateUUID(),
          content: action.payload.content,
          color: action.payload.color,
        },
      ].concat(state);
    }
    case 'remove': {
      return state.filter(
        notification => notification.index !== action.payload
      );
    }
    default:
      return state;
  }
};

const Notification = forwardRef(({ children, color }, ref) => {
  const theme = useTheme();

  return (
    <div
      className="u-contrast"
      css={{
        background: theme.color[color].base,
        padding: theme.space.base,
        borderRadius: theme.borderRadius.base,
        color: theme.contrast.muted,

        // GSAP
        visibility: 'hidden',
      }}
      ref={ref}
    >
      {children}
      <Close
        onClick={() => {
          ref.current.timeline.reverse();
        }}
      />
    </div>
  );
});

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'danger']),
};

Notification.defaultProps = {
  color: 'primary',
};

const NotificationWrapper = ({ notification }) => {
  const { dispatch } = useContext(NotificationContext);
  const theme = useTheme();

  const notificationRef = useRef();

  useEffect(() => {
    notificationRef.current.timeline = gsap.timeline({
      yoyo: true,
      onReverseComplete() {
        dispatch({
          type: 'remove',
          payload: notification.index,
        });
      },
    });

    notificationRef.current.timeline
      .set(notificationRef.current, {
        visibility: 'visible',
        marginBottom: theme.space.small,
        marginTop: -notificationRef.current.offsetHeight,
        opacity: theme.opacity.base,
      })
      .to(notificationRef.current, {
        duration: theme.gsap.timing.base,
        ease: theme.gsap.transition.base,
        opacity: 1,
        marginTop: 0,
      });
  }, []);

  return (
    <Notification color={notification.color} ref={notificationRef}>
      {notification.content} {notification.index}
    </Notification>
  );
};

NotificationWrapper.propTypes = {
  notification: PropTypes.object.isRequired,
};

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  const theme = useTheme();

  return (
    <NotificationContext.Provider value={value}>
      <Fragment>
        {createPortal(
          <div
            css={{
              position: 'fixed',
              top: theme.space.small,
              right: theme.space.small,
              zIndex: 10,
              overflowY: 'auto',
              scrollBarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',

              '&::-webkit-scrollbar': {
                width: 0,
              },

              [theme.mq.small]: {
                width: 300,
              },
            }}
          >
            {state.map(notification => (
              <NotificationWrapper
                key={notification.index}
                notification={notification}
              />
            ))}
          </div>,
          document.body
        )}
        {children}
      </Fragment>
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { NotificationContext, NotificationProvider };
