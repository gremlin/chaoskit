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
  - `center` prop has been removed
- `<ModalHeader />`
  - `center` prop has been renamed to `centered`
- All form inputs pass normal event object instead of `name, value` to increase usability and standards.
- `<SocialIcon />` component base styles updated
- Removed various utility functions that were not framework specific
- Updated panel + border colors
