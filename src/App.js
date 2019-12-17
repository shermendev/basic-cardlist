import { hot } from 'react-hot-loader/root'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '~store/store'
import { Header } from '~components'
import Head from './Head'

const Home = React.lazy(() => import(`~pages/Home`))
const NotFound = React.lazy(() => import(`~pages/NotFound/NotFound`))

const App = () => (
  <>
    <Head />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Route component={Header} path="/cardboard/" />
          <Suspense fallback={null}>
            <Switch>
              <Route exact component={Home} path="/cardboard/" />
              {/* use render with unique key to force component to unmount,
              or else 404 animation will be shared between every 404 page */}
              <Route render={({ location }) => <NotFound key={Date.now()} location={location} />} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
)

export default hot(App)
