import { persistReducer } from 'redux-persist'
import localForage from 'localforage'
import storageConfig from '~store/storageConfig'
import reducer from './reducer'

const config = {
  key: `cardBoard`,
  storage: localForage,
  whitelist: storageConfig.cardBoard
}

const storedReducer = persistReducer(config, reducer)

export default storedReducer
