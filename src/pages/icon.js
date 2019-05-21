import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import { Icon, Inline } from '../components';
import Live from '../docs/Live';
import icons from '../assets/icons/icons.json';

const IconExample = `
<Inline>
  <Icon icon="arrow-up" size="small" />
  <Icon icon="arrow-right" />
  <Icon icon="arrow-down" />
  <Icon icon="arrow-left" size="large" />
</Inline>
`.trim();

const IconExampleAll = `
<ul className="blockGrid blockGrid-2@small blockGrid-4@medium blockGrid--deepMatch">
  {Object.entries(icons).map(icon => (
    <li key={icon[0]}>
      <div className="docs__box u-textCenter">
        <Icon className="docs__iconAllExample" icon={icon[0]} />
        <code>{icon[0]}</code>
      </div>
    </li>
  ))}
</ul>
`.trim();

const IconExampleManipulate = `
<Inline>
  <Icon icon="arrow-up" className="u-textFluid--h1-h2 u-textPrimary" />
  <Icon icon="user" className="u-textLarge u-textDanger" />
</Inline>
`.trim();

const IconScope = {
  Icon,
  Inline,
  icons,
};

const IconPropDescriptions = {
  additionalIcons:
    'Pass in (and override) additional icon data to search through',
  size: "<code>oneOf(['small', 'large', 'xlarge'])</code>", // eslint-disable-line quotes
};

const IconDocs = () => (
  <BaseLayout pageTitle="Icon">
    <p>
      All UI-orientated icons follow the same <code>viewBox</code>,{' '}
      <code>width/height</code>, and <code>stroke</code> attributes for ease and
      re-usability. Icons are located within the <code>src/assets/icons/</code>{' '}
      directory and are optimized, mangled, and sent along via a JSON file that
      allows us to import and validate references more easily and only bundle
      what we actually use in our applications.
    </p>
    <Live
      code={IconExample}
      scope={IconScope}
      component={Icon}
      propDescriptions={IconPropDescriptions}
    />

    <h3>Available icons</h3>
    <Live
      code={IconExampleAll}
      scope={IconScope}
      component={Icon}
      showDocs={false}
      showEditor={false}
    />

    <h3>Manipulating icons</h3>
    <p>
      Icons are just as maluable as any piece of text; with both their size and
      color inheritting from its own, or parent selectors.
    </p>
    <Live
      code={IconExampleManipulate}
      scope={IconScope}
      component={Icon}
      showDocs={false}
    />
  </BaseLayout>
);

export default IconDocs;
