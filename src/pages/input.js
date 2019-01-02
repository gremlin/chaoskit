import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { Input } from '../components';

const phoneMask = [
  '+',
  '1',
  ' ',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const onlyNumbers = (rawValue) => {
  const mask = [];

  for (let i = 0; i < rawValue.length; i += 1) {
    // eslint-disable-next-line no-useless-escape
    mask.push(/\d/);
  }

  return mask;
};

const InputExample = `
class Example extends React.Component {
  state = {
    normalInitialValue: 'John Doe',
  };

  handleChange = (name, value) => {
    console.log({name}, {value});
  }

  render() {
    return (
      <Fragment>
        <Input
          label="Normal input"
          name="name"
          initialValue={this.state.normalInitialValue}
          onChange={this.handleChange}
          required
          validationMessage="I'm an error!"
        />
        <Input
          label="Mask Input (phone number)"
          name="phone"
          placeholder="+1 (555) 867-5309"
          mask={phoneMask}
          onChange={this.handleChange}
        />
        <Input
          label="Mask Input (only numbers)"
          name="phone"
          placeholder="12345"
          mask={onlyNumbers}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}
`.trim();

const InputScope = {
  React,
  Input,
  phoneMask,
  onlyNumbers,
};

const InputPropDescriptions = {
  explanationMessage: 'Field descriptions',
  validationMessage: 'Error messages with field',
  guide: 'Show guide while typing; used in conjunction with <code>mask</code>',
  mask:
    'Mask to apply to input; by <a target="_blank" rel="noopener noreferrer" href="https://github.com/text-mask/text-mask/">text-mask</a>',
};

const InputDocs = () => (
  <BaseLayout pageTitle="Input">
    <p>
      Uses{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/text-mask/text-mask/"
      >
        text-mask
      </a>{' '}
      to provide masking capabilities for better UX.
    </p>

    <Live
      code={InputExample}
      scope={InputScope}
      component={Input}
      propDescriptions={InputPropDescriptions}
    />
  </BaseLayout>
);

export default InputDocs;
