# Upgrade Guide

## v1 to v2 (WIP)

- `<List />` prop reorganization:

  ```js
  # Old
  <List type={['border', 'space', 'numbers']} />

  # New
  <List border type="numbers" space="base" />
  ```

- `<Button />`
  - `teal` type property has been removed.
- `<ModalFooter />`
  - Only supplies padding; BYOS.
- `<ModalHeader />`
  - `center` prop has been renamed to `centered`
- All form inputs pass normal event object instead of `name, value` to increase usability and standards.
- `<SocialIcon />` component base styles updated
- Removed various utility functions that were not framework specific
- Updated panel + border colors
- `<Checkbox />` and `<Radio />` are standalone components and do not rely on `<RadioGroup />` or `<CheckboxGroup />` (deleted) anymore to retain flexibility in their usage. Use `<RadioControl />` to inherit context from `<RadioGroup />` if needed.
- Added Formik helper field component
