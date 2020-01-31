import styled, { css } from 'styled-components'
import { Checkmark } from '@styled-icons/icomoon'
import { Button as BootstrapButton } from 'reactstrap'

export const CheckIcon = styled(Checkmark)(
  () => css`
    background: var(--success);
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 3px #fff;
    color: #fff;
    margin: 0 3px;
    width: 14px;
    height: 14px;
  `
)

export const Button = styled(BootstrapButton)(
  () => css`
    display: flex;
    align-items: center;
  `
)
