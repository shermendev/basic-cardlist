let _homeRoute

if (process.env.NODE_ENV !== `production`) {
  _homeRoute = `/`
} else {
  _homeRoute = `/cardboard/`
}

export const homeRoute = _homeRoute
