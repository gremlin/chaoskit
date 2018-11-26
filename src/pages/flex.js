import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Alert } from '../components';
import Live from '../docs/Live';

const FlexDocs = () => {
  const FlexDeeptMatchExample = `
<div className="row">
  <div className="column-6@medium">
    <h4>Without</h4>

    <div className="row">
      <div className="column-6@medium">
        <div className="docs__box--fill">You don't know how to do any of those. You mean while I'm sleeping in it?</div>
      </div>
      <div className="column-6@medium">
        <div className="docs__box--fill">Bender, this is Fry's decision… and he made it wrong. So it's time for us to interfere in his life. No! The cat shelter's on to me.</div>
      </div>
    </div>
  </div>
  <div className="column-6@medium">
    <h4>With</h4>

    <div className="row u-flexDeepMatch">
      <div className="column-6@medium">
        <div className="docs__box--fill">You don't know how to do any of those. You mean while I'm sleeping in it?</div>
      </div>
      <div className="column-6@medium">
        <div className="docs__box--fill">Bender, this is Fry's decision… and he made it wrong. So it's time for us to interfere in his life. No! The cat shelter's on to me.</div>
      </div>
    </div>
  </div>
</div>
`.trim();

  return (
    <FoundationLayout pageTitle="Flex">
      <p>We take advantage of Flexbox for many of our components; so it made sense for us to expose a number of utilities as well.</p>

      <h3>Deep match</h3>

      <p>While flex children automatically recieve the same height, children&apos;s children (where you may actually have your styling) does not. Use the <code>.u-flexDeepMatch</code> modifier attached to <code>.row</code> to resolve this.</p>

      <Live
        code={FlexDeeptMatchExample}
        scope={{}}
      />

      <h3>Aligment</h3>

      <Alert type="warning" title="Note">
        <code>{'{small,medium,large}'}</code> indicate rule declarations at respective screen-sizes.
      </Alert>

      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>.u-flexStart</code><br />
              <code>.u-flexStart@{'{small,medium,large}'}</code>
            </td>
            <td>Cross-start margin edge of the items is placed on the cross-start line.</td>
          </tr>
          <tr>
            <td>
              <code>.u-flexCenter</code><br />
              <code>.u-flexCenter@{'{small,medium,large}'}</code>
            </td>
            <td>Items are centered along the line.</td>
          </tr>
          <tr>
            <td>
              <code>.u-flexEnd</code><br />
              <code>.u-flexEnd@{'{small,medium,large}'}</code>
            </td>
            <td>Forces row to right.</td>
          </tr>
          <tr>
            <td>
              <code>.u-flexTop</code><br />
              <code>.u-flexTop@{'{small,medium,large}'}</code>
            </td>
            <td>Cross-start margin edge of the items is placed on the cross-start line.</td>
          </tr>
          <tr>
            <td>
              <code>.u-flexMiddle</code><br />
              <code>.u-flexMiddle@{'{small,medium,large}'}</code>
            </td>
            <td>Items are centered in the cross-axis.</td>
          </tr>
          <tr>
            <td>
              <code>.u-flexBottom</code><br />
              <code>.u-flexBottom@{'{small,medium,large}'}</code>
            </td>
            <td>Cross-end margin edge of the items is placed on the cross-end line.</td>
          </tr>
          <tr>
            <td>
              <code>.u-flexBetween</code>
            </td>
            <td>Items are positioned with space between the lines.</td>
          </tr>
          <tr>
            <td>
              <code>.u-flexAround</code>
            </td>
            <td>Items are positioned with space before, between, and after the lines.</td>
          </tr>
        </tbody>
      </table>

      <h3>Dimensions</h3>

      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.u-flexItemNone</code></td>
            <td>Content dimensions</td>
          </tr>
          <tr>
            <td><code>.u-flexItemAuto</code></td>
            <td>Space is allocated considering content</td>
          </tr>
          <tr>
            <td><code>.u-flexItem1</code></td>
            <td>Space is allocated solely based on flex.</td>
          </tr>
        </tbody>
      </table>
    </FoundationLayout>
  );
};

export default FlexDocs;
