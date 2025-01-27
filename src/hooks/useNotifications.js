import create from 'zustand'

import { generateUUID } from '../helpers/utility'

const useNotificationsState = create((set) => ({
  notifications: [],
  add: (payload) =>
    set((state) => ({
      notifications: [
        {
          index: generateUUID(),
          title: payload.title,
          body: payload.body,
          status: payload.status,
          timeout: payload.timeout || 5000,
        },
      ].concat(state.notifications),
    })),
  remove: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.index !== id
      ),
    })),
}))

export default useNotificationsState
