import styled, { css } from 'styled-components'
import { CancelCircle } from '@styled-icons/icomoon'
import { Button } from 'reactstrap'

export const Container = styled.div(
  () => css`
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-right: 85px;
  `
)

export const CloseAllButton = styled(Button)(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
)
export const CloseAllIcon = styled(CancelCircle)(
  () => css`
    width: 18px;
    margin-left: 5px;
    border-radius: 100%;
    fill: var(--danger);
    background-color: rgba(255, 255, 255, 0.9);
  `
)
