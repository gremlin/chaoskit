import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import { Alert } from '../components';

const TypographyDocs = () => (
  <FoundationLayout pageTitle="Typography">
    <p>
      We provide a variety of utility classes that can be used on their own;
      chained together with components, and/or chained together with other
      utility classes to create various UI needs. Apply classes to the parent to
      avoid repeating the utility unnecessarily whenever possible.
    </p>

    <Alert type="warning" title="Note">
      <p>
        As with all utilities, they can be bundled alongside each other for
        unique experiences!
      </p>
    </Alert>

    <h3>Styles</h3>

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
            <code>.u-textXsmall</code>
          </td>
          <td className="u-textXsmall">Small font-size (12px).</td>
        </tr>
        <tr>
          <td>
            <code>.u-textSmall</code>
          </td>
          <td className="u-textSmall">Small font-size (14px).</td>
        </tr>
        <tr>
          <td>
            <code>.u-textRegular</code>
          </td>
          <td className="u-textRegular">Base font-size (16px).</td>
        </tr>
        <tr>
          <td>
            <code>.u-textMedium</code>
          </td>
          <td className="u-textMedium">Medium font-size (18px).</td>
        </tr>
        <tr>
          <td>
            <code>.u-textLarge</code>
          </td>
          <td className="u-textLarge">Large font-size (20px).</td>
        </tr>
        <tr>
          <td>
            <code>.u-textXlarge</code>
          </td>
          <td className="u-textXlarge">Xlarge font-size (26px).</td>
        </tr>
        <tr>
          <td>
            <code>.u-textMediumWeight</code>
          </td>
          <td className="u-textMediumWeight">Medium text.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textBold</code>
          </td>
          <td className="u-textBold">Bold text.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textNormal</code>
          </td>
          <td className="u-textNormal">Normal text.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textMuted</code>
          </td>
          <td className="u-textMuted">Mute text.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textUnderline</code>
          </td>
          <td>
            <span className="u-textUnderline">Underline text.</span>
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-textPrimary</code>
          </td>
          <td className="u-textPrimary">Match the primary color.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textDanger</code>
          </td>
          <td className="u-textDanger">Match the danger color.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textContrast</code>
          </td>
          <td className="u-contrast u-bgPrimary">Match the contrast color.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textTruncate</code>
          </td>
          <td>
            Prevent text from wrapping onto multiple lines, and truncate with an
            ellipsis.
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-textBreak</code>
          </td>
          <td>
            Break strings if their length exceeds the width of their container.
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-textNoBreak</code>
          </td>
          <td>Prevents text from wrapping into multiple lines.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textUppercase</code>
          </td>
          <td className="u-textUppercase">Converts all text to uppercase.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textSub</code>
          </td>
          <td className="u-textSub">
            Overrides line-height for sub-text on wrapping lines
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-textHeading</code>
          </td>
          <td className="u-textHeading">Heading font family</td>
        </tr>
      </tbody>
    </table>

    <h3>Alignment</h3>

    <Alert type="warning" title="Note">
      <code>{'{small,medium,large}'}</code> indicate rule declarations at
      respective screen-sizes.
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
            <code>.u-textLeft</code>
            <br />
            <code>.u-textLeft@{'{small,medium,large}'}</code>
          </td>
          <td className="u-textLeft">Align text to the left.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textCenter</code>
            <br />
            <code>.u-textCenter@{'{small,medium,large}'}</code>
          </td>
          <td>Align text to the center.</td>
        </tr>
        <tr>
          <td>
            <code>.u-textRight</code>
            <br />
            <code>.u-textRight@{'{small,medium,large}'}</code>
          </td>
          <td>Align text to the right.</td>
        </tr>
      </tbody>
    </table>

    <h3>Headings</h3>

    <p>
      Our headings are &quot;fluid&quot; by default; as they scale down
      naturally as the screen gets smaller - but we also have utilities that
      allow you to override font-sizes and take advantage of this whenever
      needed.
    </p>

    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>.u-textFluid--h1-h2</code>
          </td>
          <td className="u-textFluid--h1-h2">Fluid text</td>
        </tr>
        <tr>
          <td>
            <code>.u-textFluid--h2-h3</code>
          </td>
          <td className="u-textFluid--h2-h3">Fluid text</td>
        </tr>
        <tr>
          <td>
            <code>.u-textFluid--h3-h4</code>
          </td>
          <td className="u-textFluid--h3-h4">Fluid text</td>
        </tr>
        <tr>
          <td>
            <code>.u-textFluid--medium</code>
          </td>
          <td className="u-textFluid--medium">Fluid text</td>
        </tr>
        <tr>
          <td>
            <code>.u-textFluid--large</code>
          </td>
          <td className="u-textFluid--large">Fluid text</td>
        </tr>
        <tr>
          <td>
            <code>.u-textFluid--xlarge</code>
          </td>
          <td className="u-textFluid--xlarge">Fluid text</td>
        </tr>
      </tbody>
    </table>

    <h3>Links</h3>

    <p>
      Links have default styles, but we also make available several utilities
      that allow you to modify them on the fly to your needs.
    </p>

    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>.u-link</code>
          </td>
          <td>
            <a className="u-link" href="https://www.gremlin.com">
              Default link
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-linkDefault</code>
          </td>
          <td>
            <a className="u-linkDefault" href="https://www.gremlin.com">
              Static link
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-linkMuted</code>
          </td>
          <td>
            <a className="u-linkMuted" href="https://www.gremlin.com">
              Muted link
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-linkContrast</code>
          </td>
          <td className="u-bgPrimary u-contrast">
            <a className="u-linkContrast" href="https://www.gremlin.com">
              Contrast link
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-linkHeading</code>
          </td>
          <td>
            <a className="u-linkHeading" href="https://www.gremlin.com">
              Heading link
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>.u-linkUnderline</code>
          </td>
          <td>
            <a className="u-linkUnderline" href="https://www.gremlin.com">
              Underline link
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </FoundationLayout>
);

export default TypographyDocs;
