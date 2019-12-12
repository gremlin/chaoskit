import { useContext } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import Inline from './Inline';
import {
  NotificationContext,
  NotificationProvider,
} from './NotificationProvider';

const NotificationExample = () => {
  const { dispatch } = useContext(NotificationContext);

  return (
    <Inline>
      <Button
        type="primary"
        onClick={() => {
          dispatch({
            type: 'add',
            payload: {
              content: 'Hello from the success toast!',
            },
          });
        }}
      >
        Add Success
      </Button>
      <Button
        type="danger"
        onClick={() => {
          dispatch({
            type: 'add',
            payload: {
              status: 'error',
              content: 'Hello from the error toast!',
              timeout: 10000,
            },
          });
        }}
      >
        Add Error
      </Button>
    </Inline>
  );
};

storiesOf('Components|Notification', module).add('Overview', () => (
  <NotificationProvider>
    <NotificationExample />
  </NotificationProvider>
));
