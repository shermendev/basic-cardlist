import styled, { css, keyframes } from 'styled-components'
import { Spinner11 } from '@styled-icons/icomoon'

export const SpinnerContainer = styled.div(
  ({ color }) => css`
    background-color: var(${`--${color}`});
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin: 5px;
    transition: opacity 0.2s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  `
)

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }`

export const Spinner = styled(Spinner11)(
  () => css`
    width: 60%;
    color: #333;
    animation: ${rotate} 1.4s linear infinite;
  `
)
