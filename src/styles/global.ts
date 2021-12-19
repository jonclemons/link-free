import { createGlobalStyle } from 'styled-components'

import type { Data } from 'types/Data'

type GlobalStyleProps = {
  data: Data
}

export const Global = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.25s ease;
  }

  body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #0f172a;
    background: ${({ data }) => data.settings.colors.background};
  }
`
