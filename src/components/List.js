import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import { forwardRef } from 'react'

import { list } from '../assets/styles/utility'

const List = forwardRef(
  (
    {
      as: Component = 'ul',
      className,
      space,
      type,
      border,
      noContrast,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()

    return (
      <Component
        ref={ref}
        css={[
          list.reset,
          {
            gridTemplateColumns: 'minmax(0, 1fr)', // Fix for `pre` tags thay may occur within
            gap: space && theme.space[space],
          },

          border && {
            '> li:not(:first-of-type)': [
              {
                paddingTop: space && theme.space[space],
                borderTop: theme.border.base,
              },

              theme.settings.contrast.enable &&
                !noContrast && {
                  '.u-contrast &': {
                    borderColor: theme.contrast.border,
                  },
                },
            ],
          },

          type === 'numbers' &&
            list.numbers({
              theme,
              space: space && theme.space[space],
              border,
              noContrast,
            }),

          type === 'circles' &&
            list.circles({
              theme,
              space: space && theme.space[space],
              border,
              noContrast,
            }),
        ]}
        className={clsx('CK__List', className)}
        {...rest}
      />
    )
  }
)

List.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),
  border: PropTypes.bool,
  className: PropTypes.string,
  space: PropTypes.oneOf([
    'xsmall',
    'small',
    'base',
    'medium',
    'large',
    'xlarge',
  ]),
  type: PropTypes.oneOf(['numbers', 'circles']),
  noContrast: PropTypes.bool,
}

export default List
