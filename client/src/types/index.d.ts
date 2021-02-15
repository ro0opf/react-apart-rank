import {} from 'express'

declare global {
  interface Window {
    swUpdate: boolean
    Notification: any
    adsbygoogle: any[]
    __INITIAL_STATE__: string
    Kakao: any
    FB: any
    google: any
    devToolsExtension(): () => void
  }

  interface Error {
    code?: number
  }
}
