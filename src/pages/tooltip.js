import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
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
  <BaseLayout pageTitle="Tooltip">
    <Live
      code={TooltipExample}
      scope={TooltipScope}
      component={Tooltip}
      propDescriptions={TooltipPropDescriptions}
    />
    <Alert type="warning" title="Note">
      <List space="base" type="numbers">
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
  </BaseLayout>
);

export default TooltipDocs;
