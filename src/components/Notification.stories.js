import { useContext } from 'react';

import Button from './Button';
import {
  NotificationContext,
  NotificationProvider,
} from './NotificationProvider';
import Inline from './Inline';
import ListItem from './ListItem';

export default {
  title: 'Components/Notification',
};

const NotificationExample = () => {
  const { dispatch } = useContext(NotificationContext);

  return (
    <Inline>
      <ListItem>
        <Button
          type="primary"
          onClick={() => {
            dispatch({
              type: 'add',
              payload: {
                content: 'Hello from the success toast! 🎉',
                timeout: -1,
              },
            });
          }}
        >
          Add Success
        </Button>
      </ListItem>
      <ListItem>
        <Button
          type="danger"
          onClick={() => {
            dispatch({
              type: 'add',
              payload: {
                status: 'error',
                title: 'Ruh-roh!',
                content: 'Hello from the error toast!',
                timeout: 10000,
              },
            });
          }}
        >
          Add Error
        </Button>
      </ListItem>
    </Inline>
  );
};

export const Overview = () => (
  <NotificationProvider>
    <NotificationExample />
  </NotificationProvider>
);
