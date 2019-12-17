import styled, { css } from 'styled-components'
import styledMap from 'styled-map'

export const ScrimContainer = styled.div(
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

export const ScrimBody = styled.div.attrs(({ isOpen, ...props }) => {
  return {
    style: {
      '--scrim-scale': isOpen ? calculateScale(props) : `1`
    }
  }
})(
  ({ isOpen }) => css`
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 100%;
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform 0.4s ease, opacity 0.4s ease;
    width: 100%;
    opacity: ${isOpen ? `1` : `0`};
    transform: translate(-50%, -50%) scale(var(--scrim-scale));
    will-change: transform, opacity;
  `
)

function calculateScale({ containerSize, location }) {
  let scale = (containerSize * Math.sqrt(2)) / 70

  scale = location === `corner` ? scale * 2 : scale

  return scale
}
