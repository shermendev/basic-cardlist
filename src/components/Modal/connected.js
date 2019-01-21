import { connect } from 'react-redux'
import { editSubmit } from 'Store/cardBoard/actions'
import Modal from './Modal'

const mapStateToProps = ({ cardBoard: { currentCardToEdit, isEditing } }) => {
  return {
    cardMakerProps: {
      color: currentCardToEdit.color,
      comment: currentCardToEdit.comment,
      id: currentCardToEdit.id,
      isEditing,
      title: currentCardToEdit.title
    },
    isOpen: isEditing
  }
}

const mapDispatchToProps = {
  onEditSubmit: editSubmit
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Modal)
