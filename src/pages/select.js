import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import Live from '../docs/Live';
import { Select } from '../components';

const SelectExample = `
class Example extends React.Component {
  state = {
    selected: -1,
  };

  handleChange = (name, value) => {
    this.setState({
      selected: value,
    }, () => console.log(name, value));
  }

  render() {
    const selectOpts = [
      { value: 1, label: 'Option One' },
      { value: 'test-string', label: 'Option Two' },
      { value: 3, label: 'Option Three' },
      { value: 4, label: 'Option Four' },
    ];

    return (
      <Select
        onChange={this.handleChange}
        selected={this.state.selected}
        name="select"
        label="Choose One"
        options={selectOpts}
      />
    );
  }
}
`.trim();

const SelectScope = {
  React,
  Select,
};

const SelectPropDescriptions = {
  explanationMessage: 'Field descriptions',
  validationMessage: 'Error messages with field',
};

const SelectDocs = () => (
  <FoundationLayout pageTitle="Select">
    <Live
      code={SelectExample}
      scope={SelectScope}
      component={Select}
      propDescriptions={SelectPropDescriptions}
    />
  </FoundationLayout>
);

export default SelectDocs;
