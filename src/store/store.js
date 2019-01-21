import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'Store/rootReducer'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

let _store

if (process.env.NODE_ENV !== `production`) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  _store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
} else {
  _store = createStore(rootReducer, compose(applyMiddleware(thunk)))
}

import(`Store/syncStore`)
  .then(({ default: syncStore }) => syncStore(store))
  .catch(null)

export const store = _store
export const persistor = persistStore(store)
