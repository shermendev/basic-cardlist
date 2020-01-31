import { css } from 'styled-components'

export const mediaLess = size => styles => css`
  @media (max-width: ${size}px) {
    ${styles}
  }
`

export const mediaMore = size => styles => css`
  @media (min-width: ${size}px) {
    ${styles}
  }
`

export const mediaBetween = (sizeMore, sizeLess) => styles => css`
  @media (min-width: ${sizeMore}px) and (max-width: ${sizeLess}) {
    ${styles}
  }
`
