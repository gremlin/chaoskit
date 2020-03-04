/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

// @NOTE This is an internal-only component used for both `<Radio />` and `<Checkbox />`
const FormChoiceLabel = ({ disabled, label, ...rest }) => {
  const theme = useTheme()

  return (
    <label
      css={[
        {
          display: 'grid',
          gridTemplateColumns: label && 'auto 1fr',
          gap: label && theme.space.small,
          alignItems: 'start',
        },

        disabled && {
          cursor: 'not-allowed',
          opacity: theme.opacity.base,
        },
      ]}
      {...rest}
    />
  )
}

FormChoiceLabel.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
}

export default FormChoiceLabel
