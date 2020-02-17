import { hot } from 'react-hot-loader/root'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ConnectedRouter } from 'connected-react-router'
import { store, persistor, history } from '~store/store'
import { Header, Head } from '~components'
import { homeRoute } from '~config/home-route'

const Home = React.lazy(() => import(`~pages/Home`))
const NotFound = React.lazy(() => import(`~pages/NotFound`))

const App = () => (
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Head />
          <Route component={Header} path={homeRoute} />
          <Suspense fallback={null}>
            <Switch>
              <Route exact component={Home} path={homeRoute} />
              {/* Use render with a unique key to force the component to unmount */}
              <Route render={() => <NotFound key={Date.now()} />} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </>
)

export default hot(App)
