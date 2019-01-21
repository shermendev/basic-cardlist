import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from 'Components'
import { Provider } from 'react-redux'
import { store, persistor } from 'Store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Head from './Head'

const Home = React.lazy(() => import(`Pages/Home`))
const NotFound = React.lazy(() => import(`Pages/NotFound/NotFound`))

const App = () => (
  <>
    <Head />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Route component={Header} path="/" />
          <Suspense fallback={null}>
            <Switch>
              <Route exact component={Home} path="/" />
              {/* use render with unique key to force component to unmount, or else 404 animation will be shared between every 404 page */}
              <Route render={props => <NotFound key={Date.now()} {...props} />} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
)

export default App
