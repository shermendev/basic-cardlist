import { connect } from 'react-redux'
import { purge, reset, toggleOrder } from 'Store/cardBoard/actions'
import OptionsBody from './OptionsBody'

const mapStateToProps = ({ cardBoard: { ascending } }) => {
  return {
    ascending
  }
}

const mapDispatchToProps = {
  onPurge: purge,
  onReset: reset,
  onToggleOrder: toggleOrder
}

export default connect(mapStateToProps,
  mapDispatchToProps)(OptionsBody)
