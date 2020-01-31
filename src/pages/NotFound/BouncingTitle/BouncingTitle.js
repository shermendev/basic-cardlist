import React from 'react'
import { ErrorTitle, AnimationToggler } from './styled'
import AnimationTogglerIcon from './AnimationTogglerIcon'
import { useToggler } from '~hooks/useToggler'

const BouncingTitle = () => {
  const { handler: handleToggleFreeze, prop: isFrozen } = useToggler()

  return (
    <>
      <AnimationToggler type="button" onClick={handleToggleFreeze}>
        <AnimationTogglerIcon isFrozen={isFrozen} />
      </AnimationToggler>
      <ErrorTitle isFrozen={isFrozen}>404</ErrorTitle>
    </>
  )
}

export default React.memo(BouncingTitle)
