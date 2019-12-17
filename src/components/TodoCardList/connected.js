import { connect } from 'react-redux'
import TodoCardList from './TodoCardList'

const mapStateToProps = ({ cardBoard: { ascending, list } }) => {
  return {
    ascending,
    list
  }
}

export default connect(mapStateToProps)(TodoCardList)
