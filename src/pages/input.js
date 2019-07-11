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

const onlyNumbers = rawValue => {
  const mask = [];

  for (let i = 0; i < rawValue.length; i += 1) {
    // eslint-disable-next-line no-useless-escape
    mask.push(/\d/);
  }

  return mask;
};

const InputExample = `
() => {
  const handleChange = (name, value) => {
    console.log({name}, {value});
  };

  return (
    <Fragment>
      <Input
        label="Normal input"
        name="name"
        onChange={handleChange}
        required
        validationMessage="I'm an error!"
      />
      <Input
        name="search"
        onChange={handleChange}
        required
        explanationMessage="Description text"
        validationMessage="I'm an error!"
        prefixIcon="search"
      />
      <Input
        label="Mask Input (phone number)"
        name="phone"
        placeholder="+1 (555) 867-5309"
        mask={phoneMask}
        defaultValue="5558675309"
        onChange={handleChange}
      />
      <Input
        label="Mask Input (only numbers)"
        name="numbers"
        placeholder="12345"
        mask={onlyNumbers}
        onChange={handleChange}
        prefixIcon="arrow-up"
      />
    </Fragment>
  )
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
