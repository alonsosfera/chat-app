import { useEffect } from "react";
import { Button, Card, Grid, Textarea } from "@nextui-org/react";
import { useChat } from "./useChat";

const Chat = () => {
  let inputBox
  const [
    messageValue,
    messages,
    isEmpty,
    sendMessage,
    setMessageText,
    keyPress
  ] = useChat()

  return (
    <Grid.Container className="chat" direction="column">
      <Grid className="messages">
        <Card className="card">
          {messages}
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
