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
    <Head />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Route component={Header} path={homeRoute} />
          <Suspense fallback={null}>
            <Switch>
              <Route exact component={Home} path={homeRoute} />
              {/* use render with unique key to force component to unmount,
              or else 404 animation will be shared between every 404 page */}
              <Route render={() => <NotFound key={Date.now()} />} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </>
)

export default hot(App)
