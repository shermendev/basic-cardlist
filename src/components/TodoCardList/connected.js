import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import equal from 'fast-deep-equal'
import TodoCardList from './TodoCardList'

const getList = ({ cardBoard: { list } }) => list
const getAscending = ({ cardBoard: { ascending } }) => ascending

function orderList(ascending, list) {
  return ascending ? [...list] : [...list].reverse()
}

const mapStateToProps = createSelector([getAscending, getList],
  (ascending, list) => {
    const orderedList = orderList(ascending, list)

    if (equal(list, orderedList)) {
      return {
        list
      }
    }

    return {
      list: orderedList
    }
  })

export default connect(mapStateToProps)(TodoCardList)
