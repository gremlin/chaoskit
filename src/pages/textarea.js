import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { Textarea } from '../components';

const TextareaExample = `
class Example extends React.Component {
  state = {
    defaultValue: 'I have an initial value!',
  };

  handleChange = (name, value) => {
    console.log({name}, {value});
  }

  render() {
    return (
      <Textarea
        label="Test label"
        name="test"
        onChange={this.handleChange}
        defaultValue={this.state.defaultValue}
        validationMessage="This field has an error"
      />
    );
  }
}
`.trim();

const TextareaScope = {
  React,
  Textarea,
};

const TextareaPropDescriptions = {
  explanationMessage: 'Field descriptions',
  validationMessage: 'Error messages with field',
};

const TextareaDocs = () => (
  <BaseLayout pageTitle="Textarea">
    <p>
      Uses{' '}
      <a href="https://github.com/andreypopp/react-textarea-autosize">
        react-textarea-autosize
      </a>{' '}
      to control growth automatically.
    </p>
    <Live
      code={TextareaExample}
      scope={TextareaScope}
      component={Textarea}
      propDescriptions={TextareaPropDescriptions}
    />
  </BaseLayout>
);

export default TextareaDocs;
