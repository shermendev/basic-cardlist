export const getRandomColor = () => {
  const randomColorIndex = Math.floor((Math.random() * 10) / 2.5)
  const colors = [`secondary`, `danger`, `success`, `warning`]

  const randomColor = colors[randomColorIndex] || `secondary`

  return randomColor
}

export const getRandomPostId = () => Math.floor(Math.random() * 100) || 1

export const getRandomShouldExist = () => Math.random() >= 0.5

export const getRandomUrl = () =>
  `/${Math.random()
    .toString()
    .slice(2)}`
