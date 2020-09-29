import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import { motion, AnimatePresence } from 'framer-motion'
import useTimeoutFn from 'react-use/lib/useTimeoutFn'

import useNotificationsState from '../hooks/useNotifications'
import { misc } from '../assets/styles/utility'

import Icon from './Icon'
import ClientOnlyPortal from './ClientOnlyPortal'

const Notification = ({ notification }) => {
  const theme = useTheme()

  const remove = useNotificationsState((state) => state.remove)

  function fn() {
    remove(notification.index)
  }

  const [, cancel] = useTimeoutFn(fn, notification.timeout)

  return (
    <motion.li
      tabIndex="-1"
      role="button"
      layout
      initial={{ opacity: 0, y: theme.space.large, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      onClick={() => {
        cancel() // Remove pending timeout

        remove(notification.index)
      }}
      css={{
        display: 'grid',
        background: theme.color.light.base,
        border: theme.border.base,
        boxShadow: theme.boxShadow.base,
        alignItems: 'center',
        cursor: 'pointer',
        gap: theme.space.small,
        gridTemplateColumns: 'auto 1fr',
        padding: theme.space.base,
        borderRadius: theme.settings.ui.radius && theme.borderRadius.large,
        fontSize: theme.fontSize.small,
        lineHeight: theme.lineHeight.small,

        '&:not(:last-of-type)': {
          marginBottom: theme.space.small,
        },
      }}
    >
      <div
        css={{
          borderRadius: '50%',
          background:
            theme.color[
              notification.status === 'success' ? 'primary' : 'danger'
            ].base,
          height: theme.height.xxsmall,
          width: theme.height.xxsmall,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Icon
          size="small"
          icon={notification.status === 'success' ? 'check' : 'close'}
          css={{
            color: theme.contrast.base,
            top: 'auto', // Reset default top offset
          }}
        />
      </div>
      <div className={theme.settings.classes.trim}>
        {notification.title && (
          <h4
            css={{
              fontSize: theme.fontSize.medium,
              marginBottom: theme.space.xsmall,
            }}
          >
            {notification.title}
          </h4>
        )}
        <p css={{ marginTop: 0 }}>{notification.body}</p>
      </div>
    </motion.li>
  )
}

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
}

const Notifications = () => {
  const notifications = useNotificationsState((state) => state.notifications)

  const theme = useTheme()

  return (
    <ClientOnlyPortal>
      <ul
        css={{
          margin: 0,
          position: 'fixed',
          top: 0,
          right: 0,
          padding: theme.space.small,
          zIndex: 10,
          overflowY: 'auto',
          height: '100%',
          width: 300,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',

          '&::-webkit-scrollbar': {
            width: 0,
          },

          '&:empty': [misc.hide],
        }}
      >
        <AnimatePresence initial={false}>
          {notifications.map((notification) => (
            <Notification
              key={notification.index}
              notification={notification}
            />
          ))}
        </AnimatePresence>
      </ul>
    </ClientOnlyPortal>
  )
}

export default Notifications
