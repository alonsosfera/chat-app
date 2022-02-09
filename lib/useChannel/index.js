import { useEffect } from 'react'
import Ably from "ably/promises"

const ably = new Ably.Realtime.Promise({ authUrl: '/api/createTokenRequest' })

export const useChannel = (channelName, callbackOnMessage) => {
  const channel = ably.channels.get(channelName)

  const onMount = () => {
    channel.subscribe(msg => { callbackOnMessage(msg) })
  }

  const onUnmount = () => {
    channel.unsubscribe()
  }

  const useEffectHook = () => {
    onMount()
    return () => { onUnmount() }
  }

  useEffect(useEffectHook)

  return [channel, ably]
}
