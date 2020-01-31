import { useState, useCallback } from 'react'

export const useToggler = (defaultIsToggled = false) => {
  const [isToggled, setIsToggled] = useState(defaultIsToggled)

  const handleToggle = useCallback(() => {
    setIsToggled(prevIsToggled => !prevIsToggled)
  }, [])

  return {
    handler: handleToggle,
    prop: isToggled
  }
}
