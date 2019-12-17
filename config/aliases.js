const path = require('path')

const aliases = [
  ['components', 'src/components'],
  ['hoc', 'src/hoc'],
  ['renderProps', 'src/render-props'],
  ['pages', 'src/pages'],
  ['containers', 'src/containers'],
  ['img', 'src/assets/img'],
  ['icons', 'src/assets/img/icons'],
  ['store', 'src/store'],
  ['utils', 'src/utils'],
  ['styles', 'src/styles']
]

const getJestAliases = () => {
  const editedAliases = aliases.reduce((accumulator, [alias, aliasPath]) => {
    return {
      ...accumulator,
      [`^~${alias}(.*)$`]: `<rootDir>/../${aliasPath}$1`
    }
  }, {})

  return editedAliases
}

const getWebpackAliases = () => {
  const editedAliases = aliases.reduce((accumulator, [alias, aliasPath]) => {
    return {
      ...accumulator,
      [`~${alias}`]: path.resolve(`${__dirname}/..`, `${aliasPath}/`)
    }
  }, {})

  return editedAliases
}

const getEslintAliases = () => {
  const editedAliases = aliases.map(([alias, aliasPath]) => [`~${alias}`, `./${aliasPath}/`])

  return editedAliases
}

module.exports = {
  getJestAliases,
  getWebpackAliases,
  getEslintAliases
}
