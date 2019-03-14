import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Icon, Inline } from '.';
import icons from '../assets/icons/icons.json';

storiesOf('Components|Icon', module)
  .addParameters({
    info: {
      text: `
        All UI-orientated icons follow the same \`viewBox\`,
        \`width/height\`, and \`stroke\` attributes for ease and
        re-usability. Icons are located within the \`src/assets/icons/\`
        directory and are optimized, mangled, and sent along via a JSON file that
        allows us to import and validate references more easily and only bundle
        what we actually use in our applications.
      `,
    },
  })
  .add('Overview', () => (
    <div className="u-pa--regular">
      <ul className="blockGrid blockGrid-2@small blockGrid-4@medium">
        {Object.entries(icons).map(icon => (
          <li key={icon[0]}>
            <div className="docs__box u-textCenter">
              <Icon className="docs__iconAllExample" icon={icon[0]} />
              <code>{icon[0]}</code>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ))
  .add(
    'Manipulating Size/Color',
    () => (
      <Inline>
        <Icon
          icon={text('Icon 1', 'arrow-up')}
          className={text('Icon 1 Classes', 'u-textFluid--h1-h2 u-textPrimary')}
        />
        <Icon
          icon={text('Icon 2', 'user')}
          className={text('Icon 2 Classes', 'u-textLarge u-textDanger')}
        />
      </Inline>
    ),
    {
      notes:
        'Icons are just as maluable as any piece of text; with both their size and color inheritting from its own, or parent selectors.',
    },
  );
