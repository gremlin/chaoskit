import { useEffect } from 'react'
import { useTheme } from 'emotion-theming'
import gsap from 'gsap'

const useInteraction = ({ ref, initial, hover, click }) => {
  const theme = useTheme()
  const hoverArgs = hover || {
    autoAlpha: 1,
    scale: 1.15,
  }

  const clickArgs = click || {
    scale: 1,
  }

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, initial)

      ref.current.timelineHover = gsap.timeline({ paused: true })

      ref.current.timelineHover.to(ref.current, {
        duration: theme.gsap.timing.short,
        ease: theme.gsap.transition.bounce,
        ...hoverArgs,
      })

      ref.current.timelineClick = gsap.timeline({ paused: true })

      ref.current.timelineClick.to(ref.current, {
        duration: theme.gsap.timing.short,
        ease: theme.gsap.transition.bounce,
        ...clickArgs,
      })
    }
  }, [ref.current])

  return {
    onMouseEnter: () => {
      if (ref.current) {
        ref.current.timelineHover.play()
      }
    },
    onMouseLeave: () => {
      if (ref.current) {
        ref.current.timelineHover.reverse()
      }
    },
    onMouseDown: () => {
      if (ref.current) {
        ref.current.timelineClick.play()
      }
    },
    onMouseUp: () => {
      if (ref.current) {
        ref.current.timelineClick.reverse()
      }
    },
  }
}

export default useInteraction
