import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import Live from '../docs/Live';
import { Textarea } from '../components';

const TextareaExample = `
class Example extends React.Component {
  state = {
    initialValue: 'I have an initial value!',
  };

  render() {
    return (
      <Textarea
        label="Test label"
        name="test"
        initialValue={this.state.initialValue}
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
  <FoundationLayout pageTitle="Textarea">
    <p>Uses <a href="https://github.com/andreypopp/react-textarea-autosize">react-textarea-autosize</a> to control growth automatically.</p>
    <Live
      code={TextareaExample}
      scope={TextareaScope}
      component={Textarea}
      propDescriptions={TextareaPropDescriptions}
    />
  </FoundationLayout>
);

export default TextareaDocs;
