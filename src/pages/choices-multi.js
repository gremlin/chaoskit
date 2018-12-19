import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Live from '../docs/Live';
import { ChoicesMulti } from '../components';

const ChoicesMultiExample = `
class Example extends React.Component {
  state = {
    selectedColors: [],
  };

  componentDidMount() {
    const newSelectedColors = [];

    this.state.selectedColors.forEach((value) => {
      const validatedOption = this.selectOpts.find(x => x.value === value);

      newSelectedColors.push(validatedOption);
    });

    this.setState({
      selectedColors: newSelectedColors,
    });
  }

  handleChange = (name, selectedColors) => {
    this.setState({ selectedColors }, () => console.log(name, selectedColors));
  }

  handleRemoveItem = (item) => {
    const selectedColors = this.state.selectedColors;
    const index = selectedColors.indexOf(item);

    if (index !== -1) selectedColors.splice(index, 1);

    this.setState({
      selectedColors,
    }, () => console.log(this.state.selectedColors));
  }

  selectOpts = [
    { value: 1, label: 'Option One' },
    { value: 'test-string', label: 'Option Two' },
    { value: 3, label: 'Option Three' },
    { value: 4, label: 'Option Four' },
  ];

  render() {
    return (
      <ChoicesMulti
        selected={this.state.selectedColors}
        options={this.selectOpts}
        name="colors"
        label="Favorite colors"
        placeholder="Choose your favorite colors"
        onChange={this.handleChange}
        removeItem={this.handleRemoveItem}
      />
    );
  }
}
`.trim();

const ChoicesMultiScope = {
  React,
  ChoicesMulti,
};

const ChoicesMultiPropDescriptions = {};

const ChoicesMultiDocs = () => (
  <BaseLayout pageTitle="Choices Multi">
    <p>Uses <a href="https://github.com/paypal/downshift">downshift</a> to provide ULTIMATE-POWER and flexibility to more complex <code>&lt;select&gt;</code> UIs.</p>
    <Live
      code={ChoicesMultiExample}
      scope={ChoicesMultiScope}
      component={ChoicesMulti}
      propDescriptions={ChoicesMultiPropDescriptions}
    />
  </BaseLayout>
);

export default ChoicesMultiDocs;
