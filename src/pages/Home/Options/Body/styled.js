import styled, { css } from 'styled-components'
import { mediaLess } from '~utils/styled'

export const Container = styled.div(
  () => css`
    left: 0px;
    position: fixed;
    top: 100px;
    z-index: 999;
    padding: 0 10px;
  `
)

export const OrderComment = styled.span(
  () => css`
    font-size: 18px;
    ${mediaLess(768)(css`
      font-size: 16px;
    `)}
  `
)
