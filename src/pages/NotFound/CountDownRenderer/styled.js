import styled, { css } from 'styled-components'
import { mediaLess } from '~utils/styled'

export const Message = styled.div.attrs(({ completed }) => {
  return {
    className: completed && `text-success`
  }
})(
  () => css`
    color: #777;
    font-size: 36px;
    ${mediaLess(560)(css`
      font-size: 26px;
    `)}
  `
)
