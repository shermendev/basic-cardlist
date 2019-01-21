export function getRandomColor() {
  const randomColorIndex = Math.floor((Math.random() * 10) / 2.5)
  let randomColor

  switch (randomColorIndex) {
    case 0:
      randomColor = `secondary`
      break
    case 1:
      randomColor = `danger`
      break
    case 2:
      randomColor = `success`
      break
    case 3:
      randomColor = `warning`
      break
    default:
      randomColor = `secondary`
      break
  }

  return randomColor
}

export function getRandomPostId() {
  return Math.floor(Math.random() * 100)
}

export function getRandomShouldExist() {
  return Math.random() >= 0.5
}

export function getRandomUrl() {
  return `/${Math.random()
    .toString()
    .slice(2)}`
}
