import { useEffect } from "react";
import { Button, Card, Grid, Textarea } from "@nextui-org/react";
import { useChat } from "./useChat";

const Chat = () => {
  let inputBox, messageEnd
  const [
    messageValue,
    messages,
    isEmpty,
    sendMessage,
    setMessageText,
    keyPress
  ] = useChat(inputBox, messageEnd)

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" })
  })

  return (
    <Grid.Container className="chat" direction="column">
      <Grid className="messages">
        <Card className="card">
          {messages}
          <div ref={element => { messageEnd = element }} />
        </Card>
      </Grid>
      <Grid className="input-form" xs={12}>
        <form onSubmit={sendMessage}>
          <Textarea
            rows={2}
            value={messageValue}
            onKeyPress={keyPress}
            placeholder="Type a message..."
            ref={element => { inputBox = element }}
            onChange={e => setMessageText(e.target.value)} />
          <Button type="submit" disabled={isEmpty}>Send</Button>
        </form>
      </Grid>
    </Grid.Container>
  )
}

export default Chat
