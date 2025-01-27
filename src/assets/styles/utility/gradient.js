import { mix, tint } from 'polished'

/**
 * Create stepped gradient
 *
 * @param  {String} start                      Hex
 * @param  {String} stop                       Hex
 * @param  {String} [position='left to right'] Gradient position
 * @return {String}                            Full gradient value
 */
export function generateGradient({
  start = '#fff',
  stop = '#fff',
  position = 'to right',
}) {
  const colors = [start]
  const steps = 19

  for (let i = 1; i <= steps; i += 1) {
    const step = (1 / steps) * i

    colors.push(mix(step, stop, start))
  }

  return `linear-gradient(${position}, ${colors.toString()})`
}

// Not using utility due to banding issue
export const dark = (theme) => ({
  background: `linear-gradient(to right, ${tint(
    0.15,
    theme.color.dark.base
  )}, ${theme.color.dark.base})`,
})

export const blueGreen = (theme) => ({
  background: generateGradient({
    start: theme.brand.blue,
    stop: theme.brand.green,
  }),
})

export const tealDarkBlue = (theme) => ({
  background: generateGradient({
    start: theme.brand.teal,
    stop: theme.brand.darkBlue,
  }),
})

export const tealBrightTeal = (theme) => ({
  background: generateGradient({
    start: theme.brand.teal,
    stop: tint(0.125, theme.brand.teal),
  }),
})

export const greenTeal = (theme) => ({
  background: generateGradient({
    start: theme.brand.green,
    stop: theme.brand.teal,
  }),
})

export const tealGreen = (theme) => ({
  background: generateGradient({
    start: theme.brand.teal,
    stop: theme.brand.green,
  }),
})

export const darkerBlueDarkestBlue = (theme) => ({
  background: generateGradient({
    start: theme.brand.darkerBlue,
    stop: theme.brand.darkestBlue,
  }),
})

export const darkBluePurple = (theme) => ({
  background: generateGradient({
    start: theme.brand.darkBlue,
    stop: theme.brand.purple,
  }),
})
