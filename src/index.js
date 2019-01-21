// FIXME: update prop-types https://github.com/facebook/react/issues/14159
import 'bootstrap/dist/css/bootstrap.min.css'
import 'css-checkbox-library/dist/css/checkboxes.min.css'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

if (process.env.NODE_ENV !== `production`) {
  require(`./why`).default(React)
}

render(<App />, document.querySelector(`#root`))
