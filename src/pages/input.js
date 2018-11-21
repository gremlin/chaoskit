import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import Live from '../docs/Live';
import { Input } from '../components';

const InputExample = `
class Example extends React.Component {
  state = {
    initialValue: 'I have an initial value!',
  };

  render() {
    return (
      <Input
        label="Test label"
        name="test" initialValue={this.state.initialValue}
      />
    );
  }
}
`.trim();

const InputScope = {
  React,
  Input,
};

const InputPropDescriptions = {
  explanationMessage: 'Field descriptions',
  validationMessage: 'Error messages with field',
};

const InputDocs = () => (
  <FoundationLayout pageTitle="Input">
    <Live
      code={InputExample}
      scope={InputScope}
      component={Input}
      propDescriptions={InputPropDescriptions}
    />
  </FoundationLayout>
);

export default InputDocs;
