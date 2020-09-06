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
          content: payload.content,
          status: payload.status,
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
