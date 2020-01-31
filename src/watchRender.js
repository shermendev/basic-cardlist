import whyDidYouRender from '@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min'

const watchRender = React =>
  whyDidYouRender(React, {
    collapseGroups: true,
    exclude: [/^CardHeader|FormGroup|CardBody/],
    hotReloadBufferMs: 1_500,
    include: [
      // components
      /^Header|Head/,
      // Home
      /^CardMaker|ColorButtons|Fetcher|Home|LimitAlert|Modal|Options|Body|Scrim|TodoCards|TodoCard|ErrorAlerts/,
      /^Spinners/,
      // NotFound
      /^NotFound|BouncingTitle|AnimationTogglerIcon/,
      // root
      /^App/,
      // redux
      /^ConnectFunction/
    ]
  })

export default watchRender
