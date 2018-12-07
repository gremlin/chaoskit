import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import Live from '../docs/Live';
import {
  Alert,
  Button,
  Tooltip,
  Icon,
  Inline,
  List,
  ListItem,
} from '../components';

const TooltipExample = `
<Fragment>
  <Inline>
    <Tooltip content="😜 Hey there!">
      <div>I display at the top!</div>
    </Tooltip>
    <Tooltip content="😜 Hey there!" placement="bottom">
      <div>I display at the bottom!</div>
    </Tooltip>
    <Tooltip content="😜 Hey there!" placement="left">
      <Button type="primary" size="xsmall">
        Look left - quick!
      </Button>
    </Tooltip>
    <Tooltip content={
      <Fragment>
        <div>😜 Hey there!</div>
        <Icon icon="download" className="u-textDanger" />
      </Fragment>
    } placement="right">
      <div>Now to the right!</div>
    </Tooltip>
  </Inline>
</Fragment>
`.trim();

const TooltipScope = {
  Button,
  Tooltip,
  Icon,
  Inline,
};

const TooltipPropDescriptions = {
  mobileTap:
    'Disables tooltips on touch devices to not interfere with interactive elements',
};

const TooltipDocs = () => (
  <FoundationLayout pageTitle="Tooltip">
    <Live
      code={TooltipExample}
      scope={TooltipScope}
      component={Tooltip}
      propDescriptions={TooltipPropDescriptions}
    />
    <Alert type="warning" title="Note">
      <List type={['number', 'space']}>
        <ListItem>
          The Tooltip component can be wrapped around any fellow component or
          standard HTML; just make sure it&apos;s only one child!
        </ListItem>
        <ListItem>
          Tooltip content can contain normal strings or other components. Go
          crazy!
        </ListItem>
      </List>
    </Alert>
  </FoundationLayout>
);

export default TooltipDocs;
