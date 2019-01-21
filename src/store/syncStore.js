import localForage from 'localforage'
import { REHYDRATE } from 'redux-persist/lib/constants'
import BroadcastChannel from 'broadcast-channel'
import equal from 'fast-deep-equal'
import storageConfig from 'Store/storageConfig'

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
    if (dispatchingSelf) return (dispatchingSelf = false)

    for (const [storageKey, storageDataToSync] of Object.entries(storageConfig)) {
      localForage.getItem(`persist:${storageKey}`, (error, storageRaw) => {
        const dataToSync = {}
        const storage = JSON.parse(storageRaw)
        const state = store.getState()[storageKey]
        let shouldSync = false

        for (const key of storageDataToSync) {
          if (!equal(JSON.parse(storage[key]), state[key])) {
            shouldSync = true
            break
          }
        }

        if (!shouldSync) return null

        for (const key of storageDataToSync) {
          dataToSync[key] = state[key]
        }

        channel.postMessage({
          dataToSync,
          storageKey
        })
      })
    }
  }
}

export default syncStore
