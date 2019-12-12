import { useContext } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import {
  NotificationContext,
  NotificationProvider,
} from './NotificationProvider';

const NotificationExample = () => {
  const { dispatch } = useContext(NotificationContext);

  return (
    <Button
      onClick={() => {
        dispatch({
          type: 'add',
          payload: {
            content: 'yo yo',
          },
        });
      }}
    >
      Add
    </Button>
  );
};

storiesOf('Components|Notification', module).add('Overview', () => (
  <NotificationProvider>
    <NotificationExample />
  </NotificationProvider>
));
