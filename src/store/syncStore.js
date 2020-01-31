import localForage from 'localforage'
import { REHYDRATE } from 'redux-persist/lib/constants'
import { BroadcastChannel } from 'broadcast-channel'
import doEqual from 'fast-deep-equal'
import storageConfig from './storageConfig'

const syncStore = store => {
  const channel = new BroadcastChannel(`Sync data between tabs`, {
    type: `idb`,
    webWorkerSupport: false
  })

  let dispatchingSelf = false

  channel.addEventListener(`message`, ({ dataToSync, storageKey }) => {
    dispatchingSelf = true

    store.dispatch({
      key: storageKey,
      payload: dataToSync,
      type: REHYDRATE
    })
  })

  store.subscribe(handleSubscribe)

  function handleSubscribe() {
    if (dispatchingSelf) {
      dispatchingSelf = false

      return null
    }

    Object.entries(storageConfig).forEach(([storageKey, storageDataToSync]) => {
      localForage.getItem(`persist:${storageKey}`, (error, storageRaw) => {
        if (!storageRaw || error) return null

        const dataToSync = {}
        const storage = JSON.parse(storageRaw)
        const state = store.getState()[storageKey]
        let shouldSync = false

        storageDataToSync.some(key => {
          if (!doEqual(JSON.parse(storage[key]), state[key])) {
            shouldSync = true

            return true
          }

          return false
        })

        if (!shouldSync) return null

        storageDataToSync.forEach(key => {
          dataToSync[key] = state[key]
        })

        channel.postMessage({
          dataToSync,
          storageKey
        })
      })
    })
  }
}

export default syncStore
