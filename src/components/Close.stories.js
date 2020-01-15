import { action } from '@storybook/addon-actions';

import Close from './Close';
import ContrastWrapper from '../../.storybook/components/Contrast';

export default {
  title: 'Components/Close',
  component: Close,
};

export const Overview = () => <Close onClick={action('Clicked')} />;

export const Contrast = () => (
  <ContrastWrapper>
    <Close onClick={action('Clicked')} />
  </ContrastWrapper>
);
