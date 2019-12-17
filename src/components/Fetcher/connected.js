import { connect } from 'react-redux'
import { preFetchNew } from '~store/cardBoard/actions'
import Fetcher from './Fetcher'

const mapStateToProps = ({ cardBoard: { fetcherColor } }) => {
  return {
    color: fetcherColor
  }
}

const mapDispatchToProps = {
  onClick: preFetchNew
}

export default connect(mapStateToProps, mapDispatchToProps)(Fetcher)
