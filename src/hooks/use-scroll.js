import { useEffect, useState } from 'react'
import { throttleScroll } from '../helpers/utility'

const useScroll = ref => {
  const [state, setState] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = throttleScroll(() => {
      if (!ref.current) return

      setState({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      })
    })

    if (ref.current) {
      ref.current.addEventListener('scroll', handler, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handler)
      }
    }
  }, [ref])

  return state
}

export default useScroll
