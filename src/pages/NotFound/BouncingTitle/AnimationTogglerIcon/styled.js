import styled, { css } from 'styled-components'
import { ReactComponent as SnowflakeSvg } from '~icons/snowflake.svg'
import { ReactComponent as FireSvg } from '~icons/fire.svg'

const iconStyles = css`
  width: 100%;
  height: 100%;
`

export const Snowflake = styled(SnowflakeSvg)(() => iconStyles)
export const Fire = styled(FireSvg)(() => iconStyles)
