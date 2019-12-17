import React from 'react'
import { AddToggler } from '~renderProps'
import { ErrorTitle, AnimationToggler } from './styled'
import AnimationTogglerIcon from './AnimationTogglerIcon'

const BouncingTitle = () => (
  <AddToggler
    render={({ handler: handleToggleFreeze, prop: isFrozen }) => (
      <>
        <AnimationToggler type="button" onClick={handleToggleFreeze}>
          <AnimationTogglerIcon isFrozen={isFrozen} />
        </AnimationToggler>
        <ErrorTitle isFrozen={isFrozen}>404</ErrorTitle>
      </>
    )}
  />
)

export default React.memo(BouncingTitle)
