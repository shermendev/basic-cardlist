import whyDidYouRender from '@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min'

const watchRender = React =>
  whyDidYouRender(React, {
    exclude: [/^CardHeader|WatchResize|CountDownRenderer/],
    hotReloadBufferMs: 1_500,
    include: [
      /^CardMaker|ColorButtons|Fetcher|Header|LimitAlert|Modal|Options|OptionsBody|Scrim|TodoCardList|TodoCard/,
      /^Home|NotFound|BouncingTitle|AnimationTogglerIcon/,
      /^AddToggler/,
      /^App|Head/,
      /^ConnectFunction/
    ]
  })

export default watchRender
