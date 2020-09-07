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
                title: 'Success!',
                body: 'Your request has been submitted',
                status: 'success',
              })
            }}
          >
            Add Success
          </Button>
        </ListItem>
        <ListItem>
          <Button
            type="danger"
            onClick={() => {
              add({
                title: 'Error!',
                body:
                  'There was a problem with your submission. Please try again later.',
                status: 'danger',
              })
            }}
          >
            Add Danger
          </Button>
        </ListItem>
      </Inline>
    </Fragment>
  )
}

export const Overview = () => <NotificationExample />
