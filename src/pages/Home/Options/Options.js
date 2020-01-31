import React from 'react'
import { Scrim } from '~pages/Home'
import Body from './Body'
import { CloseIcon, OpenIcon, Button } from './styled'
import { useToggler } from '~hooks/useToggler'

const Options = () => {
  const { handler: handleOpen, prop: isOpen } = useToggler()

  return (
    <>
      <Button isOpen={isOpen} type="button" onClick={handleOpen}>
        {isOpen ? <CloseIcon /> : <OpenIcon />}
      </Button>
      <Scrim isOpen={isOpen} location="corner" />
      {isOpen && <Body />}
    </>
  )
}

export default React.memo(Options)
