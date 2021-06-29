import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import { Container, Sender, Receiver, Timestamp } from "../styles/MessageStyle";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;
