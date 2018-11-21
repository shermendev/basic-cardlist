import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardMaker from '../CardMaker/CardMaker'
import Scrim from '../Scrim/Scrim'
import styles from './Modal.module.sass'

class Modal extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onColorTheme: PropTypes.func.isRequired,
    onCommentChange: PropTypes.func.isRequired,
    onEditSubmit: PropTypes.func.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }

  state = {
    containerSize: 0
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener(`resize`, this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.handleResize)
  }

  handleResize = () => {
    this.setState(({ containerSize }) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const windowBiggerSideSize = windowWidth >= windowHeight ? windowWidth : windowHeight

      if (windowBiggerSideSize === containerSize) return

      return {
        containerSize: windowBiggerSideSize
      }
    })
  }

  render() {
    const {
      color, comment, id, isOpen, onColorTheme, onCommentChange, onEditSubmit, onTitleChange, title
    } = this.props

    const { containerSize } = this.state

    return (
      <>
        {isOpen && (
          <div className={styles.wrap}>
            <CardMaker
              color={color}
              comment={comment}
              id={id}
              isEditing={isOpen}
              title={title}
              onColorTheme={onColorTheme}
              onCommentChange={onCommentChange}
              onEditSubmit={onEditSubmit}
              onTitleChange={onTitleChange}
            />
          </div>
        )}
        <Scrim containerSize={containerSize} isOpen={isOpen} location="center" />
      </>
    )
  }
}

export default React.memo(Modal)
