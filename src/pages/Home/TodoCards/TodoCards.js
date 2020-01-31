import React from 'react'
import TodoCard from './TodoCard'
import { useCardBoard } from './redux'
import { Container } from './styled'

const TodoCards = () => {
  const { ascending, cards } = useCardBoard()
  const orderedCards = ascending ? [...cards] : [...cards].reverse()

  const todoCards = orderedCards?.map(({ color, comment, id, title }) => (
    <TodoCard key={id} color={color} comment={comment} id={id} title={title} />
  ))

  return <Container>{todoCards}</Container>
}

export default React.memo(TodoCards)
