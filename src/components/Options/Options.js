import React from 'react'
import { Scrim } from '~components'
import { AddToggler } from '~renderProps'
import OptionsBody from './OptionsBody'
import { OptionsCloseIcon, OptionsOpenIcon, OptionsButton } from './styled'

const Options = () => (
  <AddToggler
    render={({ handler: handleOpen, prop: isOpen }) => (
      <>
        <OptionsButton isOpen={isOpen} type="button" onClick={handleOpen}>
          {isOpen ? <OptionsCloseIcon /> : <OptionsOpenIcon />}
        </OptionsButton>
        <Scrim isOpen={isOpen} location="corner" />
        {isOpen && <OptionsBody />}
      </>
    )}
  />
)

export default React.memo(Options)
