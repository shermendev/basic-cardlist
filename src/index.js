import 'bootstrap/dist/css/bootstrap.min.css'
import 'css-checkbox-library/dist/css/checkboxes.min.css'
import '~styles/global.sass'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

if (process.env.NODE_ENV !== `production`) {
  import(`./watchRender`)
    .then(({ default: watchRender }) => watchRender(React))
    .catch(null)
}

render(<App />, document.querySelector(`#root`))
