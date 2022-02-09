import Head from "next/head"
import dynamic from "next/dynamic";

const ChatComponent = dynamic(() => import('../components/chat'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat App</title>
      </Head>
      <main>
        <h1 className="title" style={{ textAlign: "center" }}>Chat App</h1>
        <ChatComponent />
      </main>
    </div>
  )
}
