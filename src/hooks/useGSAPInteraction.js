import { useEffect, useRef } from 'react'
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

  const hoverTimeline = useRef()
  const clickTimeline = useRef()

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, {
        transformOrigin: 'center center',
        ...initial,
      })

      hoverTimeline.current = gsap.timeline({ paused: true })

      hoverTimeline.current.to(ref.current, {
        duration: theme.gsap.timing.short,
        ease: theme.gsap.transition.bounce,
        ...hover,
      })

      clickTimeline.current = gsap.timeline({ paused: true })

      clickTimeline.current.to(ref.current, {
        duration: theme.gsap.timing.short,
        ease: theme.gsap.transition.bounce,
        ...click,
      })
    }
  }, [ref.current])

  return {
    onPointerEnter: () => {
      if (ref.current) {
        hoverTimeline.current.play()
      }
    },
    onPointerLeave: () => {
      if (ref.current) {
        hoverTimeline.current.reverse()
      }
    },
    onPointerDown: () => {
      if (ref.current) {
        clickTimeline.current.play()
      }
    },
    onPointerUp: () => {
      if (ref.current) {
        clickTimeline.current.reverse()
      }
    },
  }
}

export default useGSAPInteraction
