import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import cardBoard from '~store/slices/cardBoard'
import errors from '~store/slices/errors'

export const history = createBrowserHistory()

export const store = configureStore({
  devTools: process.env.NODE_ENV !== `production`,
  middleware: [routerMiddleware(history), thunk],
  reducer: {
    cardBoard,
    errors,
    router: connectRouter(history)
  }
})

export const persistor = persistStore(store, null, () => {
  import(`./syncStore`)
    .then(({ default: syncStore }) => syncStore(store))
    .catch(null)
})
