import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

export const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
  object-fit: contain;
`;

export const LoginButton = styled(Button)`
  text-transform: capitalize !important;
`;
