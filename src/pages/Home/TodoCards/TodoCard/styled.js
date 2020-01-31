import styled, { css } from 'styled-components'

export const Container = styled.div(
  () => css`
    max-width: 400px;
    flex-basis: 300px;
    flex-grow: 1;
    margin: 10px;
  `
)
