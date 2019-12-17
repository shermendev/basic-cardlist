import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'
import PropTypes from 'prop-types'

const ColorButtons = ({ color, onColorTheme }) => {
  const buttonColorsData = [
    [`secondary`, `Default`],
    [`danger`, `Red`],
    [`success`, `Green`],
    [`warning`, `Yellow`]
  ]

  const buttonList = buttonColorsData.map(([buttonColor, buttonText]) => {
    const checkEmoji = color === buttonColor ? `✅ ` : null

    return (
      <Button key={buttonColor} color={buttonColor} onClick={() => onColorTheme(buttonColor)}>
        {checkEmoji}
        {buttonText}
      </Button>
    )
  })

  return <ButtonGroup>{buttonList}</ButtonGroup>
}

ColorButtons.propTypes = {
  color: PropTypes.string.isRequired,
  onColorTheme: PropTypes.func.isRequired
}

export default ColorButtons
