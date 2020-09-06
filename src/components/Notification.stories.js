import { Fragment } from 'react'

import useNotificationsState from '../hooks/useNotifications'

import Button from './Button'
import Inline from './Inline'
import ListItem from './ListItem'
import Notifications from './Notifications'

export default {
  title: 'Components/Notification',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

const NotificationExample = () => {
  const add = useNotificationsState((state) => state.add)

  return (
    <Fragment>
      <Notifications />
      <Inline>
        <ListItem>
          <Button
            type="primary"
            onClick={() => {
              add({
                title: 'Yep yep!',
                body: `Hello ${Math.random(1, 5)}`,
                status: 'success',
              })
            }}
          >
            Add Success
          </Button>
        </ListItem>
      </Inline>
    </Fragment>
  )
}

export const Overview = () => <NotificationExample />
