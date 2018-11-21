import React, { Component } from 'react'
import { FaCogs, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import PropTypes from 'prop-types'
import Scrim from '../Scrim/Scrim'
import OptionsBody from './OptionsBody/OptionsBody'
import styles from './Options.module.sass'

class Options extends Component {
  static propTypes = {
    ascending: PropTypes.bool.isRequired,
    onOrderChange: PropTypes.func.isRequired,
    onPurge: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
  }

  state = {
    containerSize: 0,
    isOpen: false
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener(`resize`, this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.handleResize)
  }

  handleClick = () => {
    this.setState(({ isOpen }) => {
      return {
        isOpen: !isOpen
      }
    })
  }

  handleResize = () => {
    this.setState(({ containerSize }) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const windowBiggerSideSize = windowWidth >= windowHeight ? windowWidth : windowHeight

      if (windowBiggerSideSize === containerSize) return null

      return {
        containerSize: windowBiggerSideSize
      }
    })
  }

  render() {
    const { containerSize, isOpen } = this.state

    return (
      <>
        <IconContext.Provider
          value={{
            className: `${styles.icon} ${isOpen && styles.icon_open}`
          }}
        >
          <button className={`${styles.btn} ${isOpen && styles.btn_open}`} type="button" onClick={this.handleClick}>
            {isOpen ? <FaTimes /> : <FaCogs />}
          </button>
        </IconContext.Provider>
        <Scrim containerSize={containerSize} isOpen={isOpen} location="corner" />
        {isOpen && <OptionsBody {...this.props} />}
      </>
    )
  }
}

export default React.memo(Options)
