import { useEffect, useLayoutEffect, useState } from 'react'

import { throttleScroll } from '../helpers/utility'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
    ? useLayoutEffect
    : useEffect

const isBrowser = typeof window !== 'undefined'

const useScroll = (ref = {}) => {
  const [state, setState] = useState({ x: 0, y: 0 })

  const el = ref.current || isBrowser ? window : {}

  useIsomorphicLayoutEffect(() => {
    const handler = throttleScroll(() => {
      setState({
        x: el.scrollLeft || el.pageXOffset,
        y: el.scrollTop || el.pageYOffset,
      })
    })

    if (el) {
      el.addEventListener('scroll', handler, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      // Cleanup check to make sure element is still in DOM
      if (el) {
        el.removeEventListener('scroll', handler)
      }
    }
  }, [ref])

  return state
}

export default useScroll
