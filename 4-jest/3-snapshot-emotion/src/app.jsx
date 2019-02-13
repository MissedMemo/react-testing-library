/* @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

const stylin = css`
  text-align: centered;
  font-size: 24px;
  color: blue;
`

export default ({greeting}) => <div css={stylin}>{ greeting }</div>