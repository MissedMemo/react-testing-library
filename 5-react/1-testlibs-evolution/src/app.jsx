/* @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

import FavNum1 from './favnum-class-based'
import FavNum2 from './favnum-hook-based'

const appStyle = css`
  display: flex;
  justify-content: center;
`

const containerStyle = css`
  margin-top: 40px;
  padding: 20px;
  border: 2px solid lightgray;
  border-radius: 3px;
`

export default () => <div css={appStyle}>
  <div css={containerStyle}>
    <FavNum1 />
    <FavNum2 />
  </div>
</div>