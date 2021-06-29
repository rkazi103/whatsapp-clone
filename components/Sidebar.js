import {
  Container,
  Header,
  UserAvatar,
  IconsContainer,
  Search,
  SearchInput,
  SidebarButton,
  ModalContainer,
} from "../styles/SidebarStyle";
import { Button, IconButton, Modal } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import { auth, db } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChat from "./SidebarChat";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(userChatRef);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const router = useRouter();

  const createChat = () => {
    setOpen(true);

    if (!input) return null;

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      db.collection("chats").add({
        users: [user.email, input],
      });
    }

    setInput("");
    setOpen(false);
  };

  const chatAlreadyExists = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>

      <SidebarButton onClick={() => setOpen(true)}>
        Start a new chat
      </SidebarButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <ModalContainer>
          <h2>Start a new chat</h2>
          <form>
            <p>
              Please enter an email address for the user you wish to chat with
            </p>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
            />
            <br />
            <SidebarButton onClick={createChat} type="submit">
              Start Chat
            </SidebarButton>
          </form>
        </ModalContainer>
      </Modal>

      {chatsSnapshot?.docs.map((chat) => (
        <SidebarChat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
}

export default Sidebar;
