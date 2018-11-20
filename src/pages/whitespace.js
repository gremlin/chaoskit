import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Alert, Inline } from '../components';
import Live from '../docs/Live';

const WhitespaceDocs = () => {
  const WhitespaceExample = `
<Fragment>
  <div className="docs__box--fill u-mb--xlarge">Take me to your leader! I guess because my parents keep telling me to be more ladylike. As though! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood! Fry! Stay back! He's too powerful!</div>
  <div className="docs__box--fill">But I know you in the future. I cleaned your poop. Now Fry, it's been a few years since medical school, so remind me. Disemboweling in your species: fatal or non-fatal? You're going back for the Countess, aren't you?</div>
</Fragment>
`.trim();

  return (
    <FoundationLayout pageTitle="Whitespce">
      <p>We often need to apply margins or padding to individual elements. These utilities should be exclusively used for this type of spacing.</p>
      <p>To add space to any element we add a class of <code>.u-{'{type}'}{'{direction}'}--{'{amount}'}</code>. For example, if we wanted to add 32px of margin below an element, we would add a class of <code>.u-mb--large</code>.</p>

      <Alert type="warning" title="Note">
        <p>Do not use these modifiers to impact Grid, BlockGrid, or <a href="/inline/">Inline</a> spacing. They have their own spacing modifiers you can use.</p>
      </Alert>

      <h3>Type</h3>

      <Inline>
        <div>
          Margin: <code>m</code>
        </div>
        <div>
          Padding: <code>p</code>
        </div>
      </Inline>

      <h3>Direction</h3>

      <Inline>
        <div>All: <code>a</code></div>
        <div>Vertical: <code>v</code></div>
        <div>Horizontal: <code>h</code></div>
        <div>Top: <code>t</code></div>
        <div>Right: <code>r</code></div>
        <div>Bottom: <code>b</code></div>
        <div>Left: <code>l</code></div>
      </Inline>

      <h3>Amount</h3>

      <Inline>
        <div>0px: <code>remove</code></div>
        <div>4px: <code>xsmall</code></div>
        <div>8px: <code>small</code></div>
        <div>16px: <code>regular</code></div>
        <div>24px: <code>medium</code></div>
        <div>32px: <code>large</code></div>
        <div>64px: <code>xlarge</code></div>
      </Inline>

      <h3>Example</h3>

      <Live
        code={WhitespaceExample}
        scope={{}}
      />
    </FoundationLayout>
  );
};

export default WhitespaceDocs;
