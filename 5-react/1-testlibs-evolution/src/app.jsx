/* @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

import FavNum1 from './favnum-class-based'
import FavNum2 from './favnum-hook-based'

const stylin = css`
  text-align: centered;
  font-size: 24px;
  color: blue;
`

export default () => <div css={stylin}>
  <FavNum1 />
  <FavNum2 />
</div>