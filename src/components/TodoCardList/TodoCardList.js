import React from 'react'
import { Row, Container } from 'reactstrap'
import PropTypes from 'prop-types'
import doEqual from 'fast-deep-equal'
import TodoCard from './TodoCard'

const TodoCardList = ({ ascending, list }) => {
  const orderedList = ascending ? [...list] : [...list].reverse()

  const todoCardList = orderedList?.map(item => (
    <TodoCard key={item.id} color={item.color} comment={item.comment} id={item.id} title={item.title} />
  ))

  return (
    <Container>
      <Row>{todoCardList}</Row>
    </Container>
  )
}

TodoCardList.propTypes = {
  ascending: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default React.memo(
  TodoCardList,
  ({ ascending: prevAscending, list: prevList }, { ascending: nextAscending, list: nextList }) => {
    switch (true) {
      case prevAscending !== nextAscending:
        return false
      case !doEqual(prevList, nextList):
        return false
      default:
        return true
    }
  }
)
