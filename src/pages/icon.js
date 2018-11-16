import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Icon, Inline } from '../components';
import Live from '../docs/Live';
import icons from '../assets/icons/icons.json';

const IconExample = `
<Fragment>
  <Inline>
    <Icon icon="arrow-up" size="small" />
    <Icon icon="arrow-right" />
    <Icon icon="arrow-down" />
    <Icon icon="arrow-left" size="large" />
  </Inline>
</Fragment>
`.trim();

const IconExampleAll = `
<ul className="blockGrid blockGrid-2@small blockGrid-4@medium">
  {Object.entries(icons).map(icon => (
    <li>
      <div className="docs__box u-textCenter">
        <Icon className="docs__iconAllExample" icon={icon[0]} />
        <code>{icon[0]}</code>
      </div>
    </li>
  ))}
</ul>
`;

const IconExampleManipulate = `
<Fragment>
  <Inline>
    <Icon icon="arrow-up" className="u-textFluid--h1-h2 u-textPrimary" />
    <Icon icon="user" className="u-textLarge u-textDanger" />
  </Inline>
</Fragment>
`;

const IconScope = {
  Icon,
  Inline,
  icons,
};

const IconPropDescriptions = {
  size: "<code>oneOf(['small', 'large', 'xlarge'])</code>", // eslint-disable-line quotes
};

const IconDocs = () => (
  <FoundationLayout pageTitle="Icon">
    <p>All UI-orientated icons follow the same <code>viewBox</code>, <code>width/height</code>, and <code>stroke</code> attributes for ease and re-usability. Icons are located within the <code>src/assets/icons/</code> directory and are optimized, mangled, and sent along via a JSON file that allows us to import and validate references more easily and only bundle what we actually use in our applications.</p>
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
    />

    <h3>Manipulating icons</h3>
    <p>Icons are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.</p>
    <Live
      code={IconExampleManipulate}
      scope={IconScope}
      component={Icon}
      showDocs={false}
    />
  </FoundationLayout>
);

export default IconDocs;
