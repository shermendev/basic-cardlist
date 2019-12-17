import styled, { css } from 'styled-components'
import { Cogs, Times } from '@styled-icons/fa-solid'

export const OptionsButton = styled.button(
  ({ isOpen }) => css`
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    height: 70px;
    left: 15px;
    line-height: 1.33;
    outline: none !important;
    padding: 10px 16px;
    position: fixed;
    text-align: center;
    top: 15px;
    width: 70px;
    background-color: ${isOpen ? `transparent` : `#cff0ef`};
    z-index: ${isOpen ? `999` : `1`};
  `
)

export const OptionsOpenIcon = styled(Cogs)`
  ${iconStyles()}
`

export const OptionsCloseIcon = styled(Times)`
  ${iconStyles(`close`)}
`

function iconStyles(type) {
  return css`
    color: ${type === `close` ? `#fff` : `#123`};
    height: 100%;
    width: 100%;
  `
}
