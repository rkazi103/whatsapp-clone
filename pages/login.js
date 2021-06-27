import {
  Container,
  LoginContainer,
  Logo,
  LoginButton,
} from "../styles/LoginStyle";
import Head from "next/head";
import { auth, provider } from "../services/firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo
          src="https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo-768x432.png"
          alt="Whatsapp Logo"
        />
        <LoginButton onClick={signIn} variant="outlined">
          Sign In with Google
        </LoginButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;
