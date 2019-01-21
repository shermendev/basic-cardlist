import { connect } from 'react-redux'
import { colorTheme, inputChange } from 'Store/cardBoard/actions'
import { createSelector } from 'reselect'
import CardMaker from './CardMaker'

const getColor = ({ cardBoard: { color } }) => color
const getComment = ({ cardBoard: { comment } }) => comment
const getTitle = ({ cardBoard: { title } }) => title
const getParentProps = (state, parentProps) => {
  const overridableParams = [`color`, `comment`, `title`]
  const fromOwnProps = {}

  for (const key of overridableParams) {
    if (parentProps[key] === undefined) continue

    fromOwnProps[key] = parentProps[key]
  }

  return Object.keys(fromOwnProps).length !== 0 ? fromOwnProps : null
}

const mapStateToProps = createSelector([getColor, getComment, getTitle, getParentProps],
  (color, comment, title, parentProps) => {
    return {
      color,
      comment,
      title,
      ...parentProps
    }
  })

const mapDispatchToProps = dispatch => {
  return {
    onColorTheme: color => dispatch(colorTheme(color)),
    onCommentChange: ({ target }) => dispatch(inputChange(target.name, target.value)),
    onTitleChange: ({ target }) => dispatch(inputChange(target.name, target.value))
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(CardMaker)
