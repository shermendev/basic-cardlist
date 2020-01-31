const path = require('path')

const aliases = [
  ['components', 'src/components'],
  ['config', 'src/config'],
  ['containers', 'src/containers'],
  ['context', 'src/context'],
  ['hoc', 'src/hoc'],
  ['hooks', 'src/hooks'],
  ['icons', 'src/assets/img/icons'],
  ['img', 'src/assets/img'],
  ['pages', 'src/pages'],
  ['renderProps', 'src/render-props'],
  ['store', 'src/store'],
  ['styles', 'src/styles'],
  ['utils', 'src/utils']
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
