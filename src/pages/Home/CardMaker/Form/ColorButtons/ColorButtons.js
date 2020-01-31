import React from 'react'
import { ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import { CheckIcon, Button } from './styled'

const ColorButtons = ({ color, onColorChange }) => {
  const buttonColorsData = [
    [`secondary`, `Gray`],
    [`danger`, `Red`],
    [`success`, `Green`],
    [`warning`, `Yellow`]
  ]

  const buttonList = buttonColorsData.map(([buttonColor, buttonText]) => {
    const checkEmoji = color === buttonColor ? <CheckIcon /> : null

    return (
      <Button key={buttonColor} color={buttonColor} onClick={() => onColorChange(buttonColor)}>
        {checkEmoji}
        {buttonText}
      </Button>
    )
  })

  return <ButtonGroup>{buttonList}</ButtonGroup>
}

ColorButtons.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired
}

export default React.memo(ColorButtons)
