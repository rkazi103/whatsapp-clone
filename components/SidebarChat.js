import { Container, UserAvatar } from "../styles/SidebarChatStyle";
import PropTypes from "prop-types";
import getRecipientEmail from "../lib/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../services/firebase";
import { useRouter } from "next/dist/client/router";

function SidebarChat({ id, users }) {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );
  const recipientEmail = getRecipientEmail(users, user);
  const recipient = recipientSnapshot?.docs?.[0]?.data();

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipent.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>
  );
}

SidebarChat.propTypes = {
  id: PropTypes.string,
  users: PropTypes.array,
};

export default SidebarChat;
