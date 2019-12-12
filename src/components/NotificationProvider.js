import { Fragment, createContext, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useTheme } from 'emotion-theming';

import { generateUUID } from '../helpers/utility';
import Close from './Close';

const Notification = ({ children, color, onRemove }) => {
  const theme = useTheme();

  return (
    <div
      className="u-contrast"
      css={{
        background: theme.color[color].base,
        padding: theme.space.base,
        borderRadius: theme.borderRadius.base,
        color: theme.contrast.muted,
      }}
    >
      {children}
      <Close onClick={onRemove} />
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'danger']),
  onRemove: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  color: 'primary',
};

const NotificationContext = createContext();
let notificationRef;

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

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  notificationRef = useRef();

  return (
    <NotificationContext.Provider value={value}>
      <Fragment>
        {createPortal(
          <div
            ref={notificationRef}
            css={{ position: 'fixed', top: 0, right: 0 }}
          >
            {state.map(notification => (
              <Notification
                key={notification.index}
                color={notification.color}
                onRemove={() =>
                  dispatch({
                    type: 'remove',
                    payload: notification.index,
                  })
                }
              >
                {notification.content} {notification.index}
              </Notification>
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
