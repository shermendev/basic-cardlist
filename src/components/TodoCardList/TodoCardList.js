import React from 'react'
import { Row, Container } from 'reactstrap'
import PropTypes from 'prop-types'
import TodoCard from './TodoCard'

const TodoCardList = ({ list }) => {
  const todoCardList =
    list &&
    list.map(item => (
      <TodoCard key={item.id} color={item.color} comment={item.comment} id={item.id} title={item.title} />
    ))

  return (
    <Container>
      <Row>{todoCardList}</Row>
    </Container>
  )
}

TodoCardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
}

export default TodoCardList
