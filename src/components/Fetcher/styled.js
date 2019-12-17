import styled, { css } from 'styled-components'
import { Button } from 'reactstrap'

export const FetcherButton = styled(Button)(
  () => css`
    border-radius: 50%;
    bottom: 15px;
    font-size: 24px;
    height: 70px;
    line-height: 1.33;
    padding: 10px 16px;
    position: fixed;
    right: 15px;
    text-align: center;
    width: 70px;
    z-index: 1;
  `
)
