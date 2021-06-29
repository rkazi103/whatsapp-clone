import styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";

export const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

export const UserAvatar = styled(Avatar)`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconsContainer = styled.div``;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;

export const SidebarButton = styled(Button)`
  width: 100%;
  border-bottom: 1px solid whitesmoke !important;
  border-top: 1px solid whitesmoke !important;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 400;
  background-color: whitesmoke;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 50px;
  border: 2px solid #000;

  > form > input {
    padding: 10px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    flex: 1;
  }
`;
