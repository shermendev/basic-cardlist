import React from 'react'
import { Row } from 'reactstrap'
import PropTypes from 'prop-types'
import TodoCard from './TodoCard/TodoCard'

const TodoCardList = ({ ascending, list, onEdit, onRemove }) => {
  const todoCardList =
    list &&
    list.map(item => (
      <TodoCard
        key={item.id}
        color={item.color}
        comment={item.comment}
        id={item.id}
        title={item.title}
        onEdit={onEdit}
        onRemove={onRemove}
      />
    ))

  return <Row>{ascending ? todoCardList : todoCardList.reverse()}</Row>
}

TodoCardList.propTypes = {
  ascending: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default React.memo(TodoCardList)
