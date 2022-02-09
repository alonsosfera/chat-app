import { useState } from "react";
import { useChannel } from "../../lib";

export const useChat = () => {
  const [messageText, setMessageText] = useState("")
  const [receivedMessages, setMessages] = useState([])

  const isEmpty = messageText.trim().length === 0

  const [channel, ably] = useChannel("chat-demo", (message) => {
    const history = receivedMessages.slice(-199)
    setMessages([...history, message])
  })

  const sendChatMessage = (messageText) => {
    channel.publish({ name: "chat-message", data: messageText })
    setMessageText("")
  }

  const sendMessage = (event) => {
    event.preventDefault()
    sendChatMessage(messageText)
  }

  const keyPress = (event) => {
    if (event.charCode !== 13 || isEmpty) return
    sendChatMessage(messageText)
    event.preventDefault()
  }

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other"
    return <span key={index} className={`message ${author}`} data-author={author}>{message.data}</span>
  })

  return [messageText, messages, isEmpty, sendMessage, setMessageText, keyPress]
}
