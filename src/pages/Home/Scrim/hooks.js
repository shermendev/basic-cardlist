import { useEffect, useState } from 'react'

const getWindowBiggerSideSize = () => {
  const { innerHeight, innerWidth } = window
  const windowBiggerSideSize = innerWidth >= innerHeight ? innerWidth : innerHeight

  return windowBiggerSideSize
}

export const useResizeWatcher = isOpen => {
  const [containerSize, setContainerSize] = useState(0)

  useEffect(() => {
    if (isOpen) {
      const handleResize = () => {
        setContainerSize(prevContainerSize => {
          const windowBiggerSideSize = getWindowBiggerSideSize()

          return prevContainerSize < windowBiggerSideSize ? windowBiggerSideSize : prevContainerSize
        })
      }

      handleResize()

      window.addEventListener(`resize`, handleResize)

      return () => {
        window.removeEventListener(`resize`, handleResize)
        setContainerSize(0)
      }
    }
  }, [isOpen])

  return {
    containerSize
  }
}
