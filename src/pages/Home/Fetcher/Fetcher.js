import React from 'react'
import { Button, Container, AddIcon } from './styled'
import { useLimit } from '~hooks/useLimit'
import { useFetchNewCard } from './hooks'
import Spinners from './Spinners'

const Fetcher = () => {
  const hasReachedLimit = useLimit()
  const { color, handleFetchNewCard, spinners } = useFetchNewCard()

  return (
    <Container>
      <Spinners hasReachedLimit={hasReachedLimit} spinners={spinners} />
      <Button color={color} disabled={hasReachedLimit} onClick={handleFetchNewCard}>
        <AddIcon />
      </Button>
    </Container>
  )
}

export default React.memo(Fetcher)
