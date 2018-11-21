import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import { Badge } from '../components';

const propTypesArray = [{
  key: 'array',
  test: PropTypes.array,
  isRequired: PropTypes.array.isRequired,
}, {
  key: 'boolean',
  test: PropTypes.bool,
  isRequired: PropTypes.bool.isRequired,
}, {
  key: 'function',
  test: PropTypes.func,
  isRequired: PropTypes.func.isRequired,
}, {
  key: 'number',
  test: PropTypes.number,
  isRequired: PropTypes.number.isRequired,
}, {
  key: 'object',
  test: PropTypes.object,
  isRequired: PropTypes.array.isRequired,
}, {
  key: 'string',
  test: PropTypes.string,
  isRequired: PropTypes.string.isRequired,
}, {
  key: 'node',
  test: PropTypes.node,
  isRequired: PropTypes.node.isRequired,
}, {
  key: 'element',
  test: PropTypes.element,
  isRequired: PropTypes.element.isRequired,
}];

const getReactPropType = (propTypeFunc) => {
  let name = 'custom';
  let isRequired = false;

  propTypesArray.some((propType) => {
    if (propTypeFunc === propType.test) {
      name = propType.key;
      return true;
    }

    if (propTypeFunc === propType.isRequired) {
      name = propType.key;
      isRequired = true;
      return true;
    }

    return false;
  });

  return { name, isRequired };
};

const Docs = (props) => {
  const propTypes = [];
  const { component, propDescriptions } = props;

  // If no component was specified; ignore
  if (!component) return null;

  Object.keys(component.propTypes).map(propName => propTypes.push({
    propName,
    type: getReactPropType(component.propTypes[propName]),
    description: ReactHtmlParser(propDescriptions[propName]) || '',
    default: (component.defaultProps && component.defaultProps[propName]) && (typeof component.defaultProps[propName] !== 'function' ? component.defaultProps[propName].toString() : null),
  }));

  return (
    <table className="u-textSmall">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {propTypes.map(propObj => (
          <tr key={propObj.propName}>
            <td className="u-textNoBreak">
              <code>{propObj.propName}</code> {propObj.type.isRequired && <Badge rounded type="danger" label="Required" />}
            </td>
            <td className="u-textNoBreak">
              <code>{propObj.type.name}</code>
            </td>
            <td>{propObj.description}</td>
            <td>{propObj.default ? <code>{propObj.default}</code> : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Docs.propTypes = {
  component: PropTypes.func,
  propDescriptions: PropTypes.object,
};

Docs.defaultProps = {
  propDescriptions: {},
};

export default Docs;
