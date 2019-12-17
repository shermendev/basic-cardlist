import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { addNew } from '~store/cardBoard/actions'
import Home from './Home'
import { checkIfReachedLimit } from '~utils/checkIfReachedLimit'

const getListLength = ({ cardBoard: { list } }) => list.length

const mapStateToProps = createSelector([getListLength], listLength => {
  return {
    hasReachedLimit: checkIfReachedLimit(listLength)
  }
})

const mapDispatchToProps = {
  onAddNew: addNew
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
