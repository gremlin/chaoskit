import {
  Fragment,
  forwardRef,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { useTheme } from 'emotion-theming'
import gsap from 'gsap'

import { generateUUID } from '../helpers/utility'

import Icon from './Icon'

const NotificationContext = createContext()

const initialState = []

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return [
        {
          index: generateUUID(),
          title: action.payload.title,
          content: action.payload.content,
          status: action.payload.status,
          timeout: action.payload.timeout,
        },
      ].concat(state)
    }
    case 'remove': {
      return state.filter(notification => notification.index !== action.payload)
    }
    default:
      return state
  }
}

const Notification = forwardRef(({ children, status, title }, ref) => {
  const theme = useTheme()

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
    <div
      tabIndex="-1"
      role="button"
      css={{
        display: 'grid',
        background: theme.color.light.base,
        border: theme.border.base,
        boxShadow: theme.boxShadow.base,
        alignItems: 'center',
        cursor: 'pointer',
        gap: theme.space.small,
        gridTemplateColumns: 'auto 1fr',
        padding: theme.space.small,
        borderRadius: theme.settings.ui.radius && theme.borderRadius.base,
        marginBottom: theme.space.small,
        fontSize: theme.fontSize.small,
        lineHeight: theme.lineHeight.small,
        transition: `transform ${theme.timing.base} ${theme.transition.bounce}`,
        transformOrigin: 'center center',

        '&:hover, &:focus': {
          transform: 'scale(1.025)',
        },

        // GSAP
        visibility: 'hidden',
      }}
      onClick={() => {
        ref.current.timeline.reverse()
      }}
      ref={ref}
    >
      <div
        css={{
          borderRadius: '50%',
          background:
            theme.color[status === 'success' ? 'primary' : 'danger'].base,
          height: theme.height.xxsmall,
          width: theme.height.xxsmall,
          textAlign: 'center',
          lineHeight: `${theme.height.xxsmall}px`,
        }}
      >
        <Icon
          size="small"
          icon={status === 'success' ? 'check' : 'close'}
          css={{
            color: theme.contrast.base,
            top: 0, // Reset default top offset
          }}
        />
      </div>
      <div className={theme.settings.classes.trim}>
        {title && (
          <h4
            css={{
              fontSize: theme.fontSize.medium,
              marginBottom: theme.space.xsmall,
            }}
          >
            {title}
          </h4>
        )}
        <p css={{ marginTop: 0 }}>{children}</p>
      </div>
    </div>
  )
})

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf(['success', 'error']),
  title: PropTypes.string,
}

Notification.defaultProps = {
  status: 'success',
}

const NotificationWrapper = ({ notification }) => {
  const { dispatch } = useContext(NotificationContext)
  const theme = useTheme()

  const notificationRef = useRef()

  useEffect(() => {
    notificationRef.current.timeline = gsap.timeline({
      onReverseComplete() {
        dispatch({
          type: 'remove',
          payload: notification.index,
        })
      },
    })

    notificationRef.current.timeline
      .set(notificationRef.current, {
        visibility: 'visible',
      })
      .fromTo(
        notificationRef.current,
        {
          marginTop: -notificationRef.current.offsetHeight,
          opacity: 0,
        },
        {
          duration: theme.gsap.timing.base,
          ease: theme.gsap.transition.bounce,
          opacity: 1,
          marginTop: 0,
        }
      )

    // Remove notification after timeout
    if (notification.timeout !== -1) {
      setTimeout(() => {
        if (notificationRef.current) {
          notificationRef.current.timeline.reverse()
        }
      }, notification.timeout || 5000)
    }
  }, [])

  return (
    <Notification
      status={notification.status}
      title={notification.title}
      ref={notificationRef}
    >
      {notification.content}
    </Notification>
  )
}

NotificationWrapper.propTypes = {
  notification: PropTypes.object.isRequired,
}

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  const theme = useTheme()

  return (
    <NotificationContext.Provider value={value}>
      <Fragment>
        {createPortal(
          <div
            css={{
              position: 'fixed',
              top: 0,
              right: 0,
              padding: theme.space.small,
              zIndex: 10,
              overflowY: 'auto',
              width: '100%',
              scrollBarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',

              '&::-webkit-scrollbar': {
                width: 0,
              },

              [theme.mq.small]: {
                width: 300,
              },

              // Hide if empty to not take up space
              '&:empty': {
                display: 'none',
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
  )
}

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { NotificationContext, NotificationProvider }
