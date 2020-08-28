import { useEffect } from 'react'
import { useTheme } from 'emotion-theming'
import gsap from 'gsap'

const useGSAPInteraction = ({
  ref,
  initial,
  hover = {
    autoAlpha: 1,
    scale: 1.15,
  },
  click = {
    scale: 0.85,
  },
}) => {
  const theme = useTheme()

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, initial)

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

export default useGSAPInteraction
