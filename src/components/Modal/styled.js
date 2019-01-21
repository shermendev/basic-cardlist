import styled, { css } from 'styled-components'

export const ModalContainer = styled.div(() => css`
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  `)
