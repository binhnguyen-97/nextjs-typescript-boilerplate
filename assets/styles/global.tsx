import { css } from '@linaria/core';

const globals = css`
  /* stylelint-disable */
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body,
    * {
      margin: 0;
      padding: 0;
    }
  }
`;

export default globals;
