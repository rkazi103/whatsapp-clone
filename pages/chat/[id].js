import { Container, ChatContainer } from "../../styles/ChatStyle";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import { db, auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../lib/getRecipientEmail";

export default function Chat({ chat, messages }) {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Head>
        <title>Chat with {getRecipientEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />

      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const ref = db.collection("chats").doc(context.query.id);
  const messagesRef = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();
  const messages = messagesRef.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  const chatResponse = await ref.get();
  const chat = {
    id: chatResponse.id,
    ...chatResponse.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}
