import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import rootReducer from '~store/rootReducer'

let _store

if (process.env.NODE_ENV !== `production`) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose

  _store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
} else {
  _store = createStore(rootReducer, compose(applyMiddleware(thunk)))
}

export const store = _store
export const persistor = persistStore(store)

import(`~store/syncStore`)
  .then(({ default: syncStore }) => syncStore(store))
  .catch(null)
