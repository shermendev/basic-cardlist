import styled, { css } from 'styled-components'
import { mediaLess } from '~utils/styled'

export const ErrorMessage = styled.p(
  () => css`
    color: #777;
    font-size: 36px;
    ${mediaLess(768)(css`
      font-size: 26px;
    `)}
    ${mediaLess(560)(css`
      font-size: 24px;
    `)}
  `
)

export const RedirectCountDown = styled.div(
  () => css`
    font-size: 50px;
    ${mediaLess(768)(css`
      font-size: 36px;
    `)}
    ${mediaLess(560)(css`
      font-size: 26px;
    `)}
  `
)
