import { connect } from 'react-redux'
import { addNew } from 'Store/cardBoard/actions'
import Home from './Home'

const mapStateToProps = ({ cardBoard: { hasReachedLimit } }) => {
  return {
    hasReachedLimit
  }
}
const mapDispatchToProps = {
  onAddNew: addNew
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Home)
