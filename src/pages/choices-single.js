import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { ChoicesSingle } from '../components';

const ChoicesSingleExample = `
class Example extends React.Component {
  state = {
    selectedColor: -1,
  };

  handleChange = (name, selectedColor) => {
    this.setState({ selectedColor: selectedColor.value }, () => console.log(name, selectedColor));
  }

  handleRemoveItem = () => {
    this.setState({
      selectedColor: -1,
    }, () => console.log(this.state.selectedColor));
  }

  selectOpts = [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ];

  render() {
    return (
      <ChoicesSingle
        selected={this.state.selectedColor}
        options={this.selectOpts}
        label="Favorite color"
        placeholder="Choose a color"
        name="color"
        onChange={this.handleChange}
        removeItem={this.handleRemoveItem}
      />
    );
  }
}
`.trim();

const ChoicesSingleScope = {
  React,
  ChoicesSingle,
};

const ChoicesSinglePropDescriptions = {};

const ChoicesSingleDocs = () => (
  <BaseLayout pageTitle="Choices Single">
    <p>
      Uses <a href="https://github.com/paypal/downshift">downshift</a> to
      provide ULTIMATE-POWER and flexibility to more complex{' '}
      <code>&lt;select&gt;</code> UIs.
    </p>
    <Live
      code={ChoicesSingleExample}
      scope={ChoicesSingleScope}
      component={ChoicesSingle}
      propDescriptions={ChoicesSinglePropDescriptions}
    />
  </BaseLayout>
);

export default ChoicesSingleDocs;
