import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as SnowflakeSvg } from 'Icons/snowflake.svg'
import { ReactComponent as FireSvg } from 'Icons/fire.svg'

const rotateFun = keyframes`
  0% {
    transform: rotate3d(0, 0, 0, 0deg) translateX(-100px);
  }

  25% {
    transform: rotate3d(1, 0, 0, 180deg) translateX(-100px);
  }

  50% {
    transform: rotate3d(1, 0, 0, 180deg) translateX(100px);
  }

  75% {
    transform: rotate3d(1, 0, 0, 0deg) translateX(100px);
  }

  100% {
    transform: rotate3d(1, 0, 0, 0deg) translateX(-100px);
  }`

export const ErrorTitle = styled.h1(({ isFrozen }) => css`
    color: #333;
    font-size: 100px;
    animation: ${rotateFun} 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
    ${isFrozen &&
      css`
        animation-play-state: paused;
      `};
  `)

export const AnimationToggler = styled.button(() => css`
    background: none;
    outline: none !important;
    cursor: pointer;
    border: none;
    padding: 0;
    border-radius: 100%;
    width: 60px;
    height: 60px;
  `)

const iconStyles = css`
  width: 100%;
  height: 100%;
`

const Snowflake = styled(SnowflakeSvg)(() => iconStyles)
const Fire = styled(FireSvg)(() => iconStyles)

// eslint-disable-next-line react/prop-types
export const AnimationTogglerIcon = ({ isFrozen, ...props }) =>
  isFrozen ? <Fire {...props} /> : <Snowflake {...props} />