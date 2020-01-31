import styled, { css } from 'styled-components'
import styledMap from 'styled-map'

export const Container = styled.div(
  ({ isOpen }) => css`
    height: 70px;
    position: fixed;
    width: 70px;
    transition: ${isOpen ? `none` : `z-index 0s linear 0.4s`};
    z-index: ${isOpen ? `998` : `-1`};
    ${styledMap(`location`, {
    center: css`
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `,
    corner: css`
        left: 15px;
        top: 15px;
      `
  })};
  `
)

const calculateScale = (isOpen, containerSize, location) => {
  if (!isOpen) {
    return 1
  }

  const scale = (containerSize * Math.sqrt(2)) / 70

  switch (location) {
    case `corner`:
      return scale * 2
    case `center`:
    default:
      return scale
  }
}

export const Body = styled.div.attrs(({ containerSize, isOpen, location }) => {
  return {
    style: {
      [`--scrim-scale-${location}`]: calculateScale(isOpen, containerSize, location)
    }
  }
})(
  ({ isOpen, location }) => css`
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 100%;
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform 0.4s ease, opacity 0.4s ease;
    width: 100%;
    opacity: ${isOpen ? `1` : `0`};
    transform: translate(-50%, -50%) scale(var(${`--scrim-scale-${location}`}));
    will-change: transform, opacity;
  `
)
