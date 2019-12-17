import { connect } from 'react-redux'
import { colorTheme, inputChange } from '~store/cardBoard/actions'
import CardMaker from './CardMaker'

const mapStateToProps = ({ cardBoard: { color, comment, title } }, ownProps) => {
  return {
    color,
    comment,
    title,
    ...ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onColorTheme: color => dispatch(colorTheme(color)),
    onCommentChange: ({ target }) => dispatch(inputChange(target.name, target.value)),
    onTitleChange: ({ target }) => dispatch(inputChange(target.name, target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardMaker)
