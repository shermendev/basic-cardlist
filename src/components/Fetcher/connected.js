import { connect } from 'react-redux'
import { preFetchNew } from 'Store/cardBoard/actions'
import Fetcher from './Fetcher'

const mapStateToProps = ({ cardBoard: { fetcherColor, hasReachedLimit } }) => {
  return {
    color: fetcherColor,
    hasReachedLimit
  }
}

const mapDispatchToProps = {
  onClick: preFetchNew
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Fetcher)
