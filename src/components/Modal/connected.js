import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { editSubmit } from '~store/cardBoard/actions'
import Modal from './Modal'

const getCurrentCardToEdit = ({ cardBoard: { currentCardToEdit } }) => currentCardToEdit

const getIsEditing = ({ cardBoard: { isEditing } }) => isEditing

const mapStateToProps = createSelector(
  [getCurrentCardToEdit, getIsEditing],
  ({ color, comment, id, title }, isEditing) => {
    return {
      cardMakerProps: {
        color,
        comment,
        id,
        isEditing,
        title
      },
      isOpen: isEditing
    }
  }
)

const mapDispatchToProps = {
  onEditSubmit: editSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
