import styled, { css } from 'styled-components'
import { Button as BootstrapButton } from 'reactstrap'
import { Plus } from '@styled-icons/fa-solid'

export const Container = styled.div(
  () => css`
    bottom: 15px;
    position: fixed;
    right: 15px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
)

export const Button = styled(BootstrapButton)(
  () => css`
    border-radius: 50%;
    font-size: 24px;
    height: 70px;
    line-height: 1.33;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    z-index: 1;
  `
)
export const AddIcon = styled(Plus)(
  () => css`
    width: 70%;
    color: #fff;
  `
)
