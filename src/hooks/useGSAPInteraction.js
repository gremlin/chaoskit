import { useEffect } from 'react'
import { useTheme } from 'emotion-theming'
import gsap from 'gsap'

const useGSAPInteraction = ({
  ref,
  initial = {},
  hover = {
    autoAlpha: 1,
    scale: 1.15,
  },
  click = {
    scale: 0.925,
  },
}) => {
  const theme = useTheme()

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, {
        transformOrigin: 'center center',
        ...initial,
      })

      ref.current.timelineHover = gsap.timeline({ paused: true })

      ref.current.timelineHover.to(ref.current, {
        duration: theme.gsap.timing.short,
        ease: theme.gsap.transition.bounce,
        ...hover,
      })

      ref.current.timelineClick = gsap.timeline({ paused: true })

      ref.current.timelineClick.to(ref.current, {
        duration: theme.gsap.timing.short,
        ease: theme.gsap.transition.bounce,
        ...click,
      })
    }
  }, [ref.current])

  return {
    onPointerEnter: () => {
      if (ref.current) {
        ref.current.timelineHover.play()
      }
    },
    onPointerLeave: () => {
      if (ref.current) {
        ref.current.timelineHover.reverse()
      }
    },
    onPointerDown: () => {
      if (ref.current) {
        ref.current.timelineClick.play()
      }
    },
    onPointerUp: () => {
      if (ref.current) {
        ref.current.timelineClick.reverse()
      }
    },
  }
}

export default useGSAPInteraction
