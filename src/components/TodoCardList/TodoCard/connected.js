import { connect } from 'react-redux'
import { edit, remove } from '~store/cardBoard/actions'
import TodoCard from './TodoCard'

const mapDispatchToProps = {
  onEdit: edit,
  onRemove: remove
}

export default connect(null, mapDispatchToProps)(TodoCard)
