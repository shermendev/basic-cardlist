import React from 'react'
import { Button } from 'reactstrap'
import { Container, OrderComment } from './styled'
import { useCardBoard } from './redux'

const Body = () => {
  const { ascending, handleRemoveAllCards, handleResetCounter, handleToggleCardsOrder } = useCardBoard()

  return (
    <Container>
      <div className="d-flex align-items-center">
        <div className="ckbx-style-14 d-inline-block">
          <input
            checked={ascending}
            id="ckbx-style-14-1"
            name="ckbx-style-14"
            type="checkbox"
            onChange={handleToggleCardsOrder}
          />
          <label className="mb-0" htmlFor="ckbx-style-14-1" />
        </div>
        <OrderComment className="text-white ml-2">
          {`Toggle ascending order. Current order: `}
          <span className="text-info">{ascending ? `Ascending` : `Descending`}</span>
        </OrderComment>
      </div>
      <Button className="mt-4" color="danger" onClick={handleRemoveAllCards}>
        Purge all
      </Button>
      <Button className="mt-4 ml-2" color="warning" onClick={handleResetCounter}>
        Reset counter
      </Button>
    </Container>
  )
}

export default Body
