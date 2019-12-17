import styled, { css } from 'styled-components'

export const CountDownMessage = styled.div.attrs(({ completed }) => {
  return {
    className: completed && `text-success`
  }
})(
  () => css`
    color: #777;
    font-size: 36px;
  `
)
